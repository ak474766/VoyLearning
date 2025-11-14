'use client';
import DOMPurify from 'dompurify';

export type ModificationType = 'replace' | 'insertAfter' | 'insertBefore' | 'updateText' | 'addImage' | 'appendChild';

export interface HtmlModification {
  targetSelector: string;
  modificationType: ModificationType;
  newContent: string;
  explanation: string;
}

/**
 * Apply partial edit to HTML using DOM manipulation
 * This preserves the entire HTML structure and only modifies the targeted element
 */
type ElementContext = { selector?: string; textContent?: string; tagName?: string; index?: number };

export async function applyPartialEdit(
  currentHtml: string,
  targetSelector: string,
  modificationType: ModificationType,
  newContent: string,
  context?: ElementContext
): Promise<string> {
  try {
    // Create a DOM parser
    const parser = new DOMParser();
    const doc = parser.parseFromString(currentHtml, 'text/html');

    // Fragment-level sanitize options to preserve CSS and scripts inside the iframe document
    const fragmentSanitizeOptions = {
      ALLOWED_TAGS: [
        'html', 'head', 'body', 'title', 'meta', 'link',
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'p', 'br', 'hr', 'pre', 'code', 'blockquote',
        'ul', 'ol', 'li', 'dl', 'dt', 'dd',
        'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td',
        'div', 'span', 'section', 'article', 'aside', 'header', 'footer', 'nav', 'main',
        'a', 'img', 'figure', 'figcaption',
        'strong', 'em', 'b', 'i', 'u', 's', 'mark', 'small', 'sub', 'sup',
        'style', 'script',
      ],
      ALLOWED_ATTR: [
        'href', 'src', 'alt', 'title', 'class', 'id', 'style',
        'width', 'height', 'colspan', 'rowspan',
        'target', 'rel', 'type', 'charset', 'name', 'content',
        'async', 'defer', 'crossorigin', 'integrity', 'referrerpolicy',
        'loading', 'decoding', 'sizes', 'fetchpriority',
      ],
      ALLOW_DATA_ATTR: false,
    } as const;

    // Find the target element
    let targetElement: Element | null = doc.querySelector(targetSelector);
    
    if (!targetElement) {
      const nthMatch = targetSelector.match(/:nth-of-type\((\d+)\)/);
      if (nthMatch) {
        const n = parseInt(nthMatch[1], 10);
        const baseSelector = targetSelector.replace(/:nth-of-type\(\d+\)/g, '');
        const candidates = doc.querySelectorAll(baseSelector);
        if (candidates.length >= n) {
          targetElement = candidates[n - 1] || null;
        } else if (candidates.length > 0) {
          targetElement = candidates[0] || null;
        }
      }
    }

    if (!targetElement && targetSelector.includes('.diagram-placeholder')) {
      const placeholders = doc.querySelectorAll('.diagram-placeholder');
      if (placeholders.length > 0) {
        targetElement = placeholders[0];
      }
    }

    if (!targetElement) {
      const altSelector = targetSelector.replace(/:nth-of-type\((\d+)\)/, ':nth-child($1)');
      targetElement = doc.querySelector(altSelector);
    }

    if (!targetElement && context) {
      const candidate = findElementByContext(doc, context);
      if (candidate) targetElement = candidate;
    }

    if (!targetElement) {
      if (modificationType === 'addImage' || modificationType === 'appendChild') {
        targetElement = doc.body;
      } else {
        throw new Error(`Target element not found: ${targetSelector}`);
      }
    }

    // Apply modification based on type
    switch (modificationType) {
      case 'replace':
        // Replace entire element
        const tempDiv = doc.createElement('div');
        tempDiv.innerHTML = DOMPurify.sanitize(newContent, fragmentSanitizeOptions as any) as unknown as string;
        const newElement = tempDiv.firstElementChild;
        if (newElement) {
          targetElement.replaceWith(newElement);
        }
        break;

      case 'updateText':
        // Update only text content
        targetElement.textContent = newContent;
        break;

      case 'insertAfter':
        // Insert new content after target element
        const afterDiv = doc.createElement('div');
        afterDiv.innerHTML = DOMPurify.sanitize(newContent, fragmentSanitizeOptions as any) as unknown as string;
        while (afterDiv.firstChild) {
          targetElement.after(afterDiv.firstChild);
        }
        break;

      case 'insertBefore':
        // Insert new content before target element
        const beforeDiv = doc.createElement('div');
        beforeDiv.innerHTML = DOMPurify.sanitize(newContent, fragmentSanitizeOptions as any) as unknown as string;
        while (beforeDiv.firstChild) {
          targetElement.before(beforeDiv.firstChild);
        }
        break;

      case 'addImage':
        const wrapper = doc.createElement('div');
        wrapper.className = 'flowchart';
        const img = doc.createElement('img');
        img.src = newContent;
        img.alt = 'Image';
        img.loading = 'lazy';
        img.decoding = 'async';
        img.referrerPolicy = 'no-referrer';
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        img.style.display = 'block';
        img.style.margin = '1rem auto';
        img.setAttribute('fetchpriority', 'low');
        // Allow responsive hints if later extended with srcset
        img.setAttribute('sizes', '100vw');
        wrapper.appendChild(img);
        const te = targetElement as HTMLElement;
        if (te.classList?.contains('diagram-placeholder') || te.classList?.contains('image-placeholder')) {
          te.innerHTML = '';
          te.appendChild(wrapper);
        } else if (te.classList?.contains('flowchart')) {
          te.innerHTML = '';
          te.appendChild(img);
        } else {
          te.after(wrapper);
        }
        break;

      case 'appendChild':
        // Append as child of target element
        const childDiv = doc.createElement('div');
        childDiv.innerHTML = DOMPurify.sanitize(newContent, fragmentSanitizeOptions as any) as unknown as string;
        while (childDiv.firstChild) {
          targetElement.appendChild(childDiv.firstChild);
        }
        break;

      default:
        throw new Error(`Unknown modification type: ${modificationType}`);
    }

    // Serialize back to HTML
    const serializer = new XMLSerializer();
    const modifiedHtml = serializer.serializeToString(doc);

    // Clean up XML declaration if present
    return modifiedHtml.replace(/<\?xml[^>]*\?>/g, '');
  } catch (error) {
    console.error('Error applying partial edit:', error);
    throw new Error(`Failed to apply partial edit: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Find element by various selector strategies
 * Tries multiple approaches to locate the target element
 */
export function findElementByContext(
  doc: Document,
  context: {
    selector?: string;
    textContent?: string;
    tagName?: string;
    index?: number;
  }
): Element | null {
  // Try direct selector first
  if (context.selector) {
    const element = doc.querySelector(context.selector);
    if (element) return element;
  }

  // Try finding by text content
  if (context.textContent && context.tagName) {
    const elements = doc.querySelectorAll(context.tagName);
    for (const el of Array.from(elements)) {
      if (el.textContent?.includes(context.textContent)) {
        return el;
      }
    }
  }

  // Try finding by tag name and index
  if (context.tagName && context.index !== undefined) {
    const elements = doc.querySelectorAll(context.tagName);
    return elements[context.index] || null;
  }

  return null;
}

/**
 * Extract text content from HTML for LLM context
 * Removes scripts, styles, and returns clean text
 */
export function extractTextContent(html: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  // Remove script and style tags
  const scripts = doc.querySelectorAll('script, style');
  scripts.forEach(el => el.remove());

  return doc.body.textContent || '';
}

/**
 * Validate HTML structure
 */
export function validateHtml(html: string): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!html || html.trim().length === 0) {
    errors.push('HTML content is empty');
  }

  if (html.length > 5000000) { // 5MB limit
    errors.push('HTML content exceeds size limit (5MB)');
  }

  // Check for basic HTML structure
  if (!html.includes('<html') && !html.includes('<body')) {
    errors.push('HTML missing basic structure');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Sanitize HTML to prevent XSS
 */
export function sanitizeHtml(html: string): string {
  const config = {
    WHOLE_DOCUMENT: true,
    ALLOWED_TAGS: [
      'html', 'head', 'body', 'title', 'meta', 'link',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'p', 'br', 'hr', 'pre', 'code', 'blockquote',
      'ul', 'ol', 'li', 'dl', 'dt', 'dd',
      'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td',
      'div', 'span', 'section', 'article', 'aside', 'header', 'footer', 'nav', 'main',
      'a', 'img', 'figure', 'figcaption',
      'strong', 'em', 'b', 'i', 'u', 's', 'mark', 'small', 'sub', 'sup',
      'style',
    ],
    ALLOWED_ATTR: [
      'href', 'src', 'alt', 'title', 'class', 'id', 'style',
      'width', 'height', 'colspan', 'rowspan',
      'target', 'rel', 'type', 'charset', 'name', 'content',
      'referrerpolicy', 'loading', 'decoding', 'sizes', 'fetchpriority',
    ],
    ALLOW_DATA_ATTR: false,
  } as any;
  return DOMPurify.sanitize(html, config) as unknown as string;
}

/**
 * Generate CSS selector for an element
 */
export function generateSelector(element: Element): string {
  // If element has ID, use it
  if (element.id) {
    return `#${element.id}`;
  }

  // If element has unique class
  if (element.className) {
    const classes = element.className.split(' ').filter(c => c.trim());
    if (classes.length > 0) {
      return `.${classes[0]}`;
    }
  }

  // Use tag name with nth-of-type
  const parent = element.parentElement;
  if (parent) {
    const siblings = Array.from(parent.children).filter(
      el => el.tagName === element.tagName
    );
    const index = siblings.indexOf(element) + 1;
    return `${element.tagName.toLowerCase()}:nth-of-type(${index})`;
  }

  return element.tagName.toLowerCase();
}
