'use server';
import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';
import { Buffer } from 'buffer';
type ModificationType = 'replace' | 'insertAfter' | 'insertBefore' | 'updateText' | 'addImage' | 'appendChild';

export interface EditInstruction {
  currentHtml: string;
  userInstruction: string;
  imageUrl?: string;
  apiKey?: string;
  conversationHistory?: { role: 'user' | 'assistant'; content: string }[];
}

export interface EditResponse {
  success: boolean;
  modifiedHtml?: string;
  changeDescription?: string;
  modification?: {
    targetSelector: string;
    modificationType: ModificationType;
    newContent: string;
    explanation: string;
    textContent?: string;
    tagName?: string;
    index?: number;
  };
  error?: string;
}

const HtmlModificationSchema = z.object({
  targetSelector: z.string().describe('CSS selector of the element to modify'),
  modificationType: z.enum(['replace', 'insertAfter', 'insertBefore', 'updateText', 'addImage', 'appendChild']),
  newContent: z.string().describe('The new HTML content or text to insert'),
  explanation: z.string().describe('Brief description of what was changed'),
  textContent: z.string().optional().describe('Fallback: a short snippet of nearby text to locate the element'),
  tagName: z.string().optional().describe('Fallback: tag name to narrow the search (e.g., div, h2)'),
  index: z.number().optional().describe('Fallback: 1-based index among elements with the tagName'),
});

/**
 * LLM-powered HTML editor that intelligently identifies and modifies specific parts
 */
export async function editHtmlWithLLM(instruction: EditInstruction): Promise<EditResponse> {
  try {
    // Validate input HTML
    const validation = validateHtmlServer(instruction.currentHtml);
    if (!validation.valid) {
      return {
        success: false,
        error: `Invalid HTML: ${validation.errors.join(', ')}`,
      };
    }

    // Prepare the prompt for LLM
    const historyText = instruction.conversationHistory && instruction.conversationHistory.length
      ? `\nConversation History:\n${instruction.conversationHistory.map(m => `${m.role}: ${m.content}`).join('\n')}`
      : '';
    const systemPrompt = `You are an expert HTML editor agent. Your task is to analyze HTML content and user instructions to make precise, targeted modifications.

CRITICAL RULES:
1. NEVER regenerate the entire HTML document
2. Identify the EXACT element that needs modification
3. Provide ONLY the specific content that needs to change
4. Use precise CSS selectors (prefer ID or class; avoid nth-of-type unless necessary)
5. Preserve all existing HTML structure, styling, and formatting
6. For image insertion, if the document contains ".diagram-placeholder" or ".image-placeholder", target that element. If neither exists, choose the most relevant nearby section (e.g., after a related heading). The renderer will wrap the image URL in the correct responsive container, so you only need to choose the insertion point.
7. Ensure the selector exists in the provided HTML; adjust to an existing class/ID if needed
8. Also include fallback fields (textContent, tagName, index) that can help locate the target if the selector fails

MODIFICATION TYPES:
- "replace": Replace entire element with new HTML with proper css if the css is not exist(for image create css also so its render properly with the html code)
- "updateText": Change only the text content (preserves tags)
- "insertAfter": Insert new content after the target element
- "insertBefore": Insert new content before the target element
- "addImage": Insert an image after the target element
- "appendChild": Add content as a child of the target element

Current HTML Document:
\`\`\`html
${instruction.currentHtml}
\`\`\`

User Instruction: "${instruction.userInstruction}"
${instruction.imageUrl ? (/^https?:\/\//.test(instruction.imageUrl) ? `\nImage URL to insert: ${instruction.imageUrl}` : `\nAn image has been attached for context. Do not insert the image unless explicitly requested.`) : ''}
${historyText}

Analyze the HTML and provide a JSON response with:
1. targetSelector: The CSS selector for the element to modify
2. modificationType: One of the types listed above
3. newContent: The exact HTML/text to insert (keep it minimal). For "addImage", a brief description is fine because the final renderer will use the provided image URL.
4. explanation: Brief description of the change

Example Response:
{
  "targetSelector": "h1.main-title",
  "modificationType": "updateText",
  "newContent": "New Title Text",
  "explanation": "Changed the main heading text"
}`;

    // Call LLM with retry logic (multimodal if image present)
    const client = instruction.apiKey
      ? genkit({ plugins: [googleAI({ apiKey: instruction.apiKey })], model: 'googleai/gemini-2.5-flash' })
      : ai;
    const promptInput: any = await buildPromptWithOptionalImage(systemPrompt, instruction.imageUrl);
    const llmResponse = await retryWithBackoff(async () => {
      return await client.generate({
        prompt: promptInput,
        output: {
          schema: HtmlModificationSchema,
        },
      });
    });

    // Parse LLM response robustly
    let modification: z.infer<typeof HtmlModificationSchema> | null = null;
    const candidate = (llmResponse as any)?.output ?? (llmResponse as any)?.data ?? undefined;
    if (candidate) {
      const parsed = HtmlModificationSchema.safeParse(candidate);
      if (parsed.success) {
        modification = parsed.data;
      }
    }
    if (!modification) {
      const text = (llmResponse as any)?.text;
      if (typeof text === 'string') {
        try {
          const json = JSON.parse(text);
          const parsed = HtmlModificationSchema.safeParse(json);
          if (parsed.success) {
            modification = parsed.data;
          }
        } catch {
          // ignore JSON parse errors
        }
      }
    }

    if (!modification) {
      throw new Error('LLM did not return a valid modification');
    }

    // If adding an image, use the provided URL
    let contentToInsert = modification.newContent;
    if (modification.modificationType === 'addImage' && instruction.imageUrl) {
      contentToInsert = instruction.imageUrl;
    }

    // Return modification plan; client will apply DOM changes and sanitize
    return {
      success: true,
      modification: {
        targetSelector: modification.targetSelector,
        modificationType: modification.modificationType,
        newContent: contentToInsert,
        explanation: modification.explanation,
        textContent: (modification as any).textContent,
        tagName: (modification as any).tagName,
        index: (modification as any).index,
      },
      changeDescription: modification.explanation,
    };
  } catch (error) {
    console.error('HTML editing error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

/**
 * Answer questions about HTML content without modifying it
 */
export async function answerQuestionAboutHtml(
  htmlContent: string,
  question: string,
  opts?: { apiKey?: string; conversationHistory?: { role: 'user' | 'assistant'; content: string }[]; imageUrl?: string }
): Promise<string> {
  try {
    const historyText = opts?.conversationHistory && opts.conversationHistory.length
      ? `\nConversation History:\n${opts.conversationHistory.map(m => `${m.role}: ${m.content}`).join('\n')}`
      : '';
    const imageText = opts?.imageUrl ? `\nAn image has been attached. Consider the image together with the HTML when answering. Avoid making claims beyond what is supported by the HTML and the visible content of the image.` : '';
    const prompt = `You are a helpful learning assistant. Answer the user's question using the provided HTML document content.${opts?.imageUrl ? ' Also consider the attached image.' : ''} Avoid using external knowledge.

HTML Document Content:
\`\`\`html
${htmlContent}
\`\`\`

User Question: "${question}"
${historyText}
${imageText}

Provide a clear, concise answer based on the document content. If the answer cannot be found in the document, say so.`;

    const client = opts?.apiKey
      ? genkit({ plugins: [googleAI({ apiKey: opts.apiKey })], model: 'googleai/gemini-2.5-flash' })
      : ai;
    const promptInput: any = await buildPromptWithOptionalImage(prompt, opts?.imageUrl);
    const response = await retryWithBackoff(async () => {
      return await client.generate({ prompt: promptInput });
    });

    return response.text;
  } catch (error) {
    console.error('Question answering error:', error);
    throw new Error(`Failed to answer question: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}


/**
 * Retry helper with exponential backoff
 */
async function retryWithBackoff<T>(fn: () => Promise<T>, retries = 3): Promise<T> {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === retries - 1) throw error;
      const delay = Math.pow(2, i) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  throw new Error('Max retries exceeded');
}
function validateHtmlServer(html: string): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  if (!html || html.trim().length === 0) errors.push('HTML content is empty');
  if (html.length > 5000000) errors.push('HTML content exceeds size limit (5MB)');
  if (!html.includes('<html') && !html.includes('<body')) errors.push('HTML missing basic structure');
  return { valid: errors.length === 0, errors };
}

async function buildPromptWithOptionalImage(textPrompt: string, imageUrl?: string): Promise<any> {
  if (!imageUrl) return textPrompt;
  const mediaUrl = imageUrl.startsWith('data:') ? imageUrl : (await toDataUrlFromUrl(imageUrl)) || imageUrl;
  return [
    { media: { url: mediaUrl } },
    { text: textPrompt },
  ];
}

async function toDataUrlFromUrl(url: string): Promise<string | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    const res = await fetch(url, { signal: controller.signal, headers: { Accept: 'image/*' } });
    clearTimeout(timeout);
    if (!res.ok) return null;
    const mime = res.headers.get('content-type') || 'image/jpeg';
    const arrayBuffer = await res.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString('base64');
    return `data:${mime};base64,${base64}`;
  } catch {
    return null;
  }
}
