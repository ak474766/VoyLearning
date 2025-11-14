'use client';
import { useState, useEffect, useCallback } from 'react';
import { loadModifiedHtml, loadOriginalHtml } from '@/services/firebase/html-storage';

export interface NotePreviewState {
  htmlContent: string | null;
  isModified: boolean;
  loading: boolean;
  error: string | null;
}

export interface NotePreviewActions {
  reload: () => Promise<void>;
  updateHtml: (newHtml: string) => void;
}

/**
 * Hook for managing note preview with cascading load logic
 * 
 * Load Priority:
 * 1. Check Firebase Storage for user's modified version
 * 2. If not found, load original from codebase
 * 
 * @param userId - Current user ID
 * @param course - Course identifier (e.g., 'fsp', 'ata')
 * @param week - Week identifier (e.g., 'week1')
 * @param lectureId - Lecture identifier (e.g., 'FSPW1')
 */
export function useNotePreview(
  userId: string | undefined,
  course: string,
  week: string,
  lectureId: string
): NotePreviewState & NotePreviewActions {
  const [state, setState] = useState<NotePreviewState>({
    htmlContent: null,
    isModified: false,
    loading: true,
    error: null,
  });

  const loadHtmlContent = useCallback(async () => {
    if (!userId) {
      // Don't set error - just stay in loading state until user is available
      setState({
        htmlContent: null,
        isModified: false,
        loading: true,
        error: null,
      });
      return;
    }

    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      // Try to load modified version first (will return null if doesn't exist)
      const modifiedHtml = await loadModifiedHtml(userId, week, lectureId);
      
      if (modifiedHtml) {
        setState({
          htmlContent: modifiedHtml,
          isModified: true,
          loading: false,
          error: null,
        });
        return;
      }

      // Fall back to original from codebase
      const originalHtml = await loadOriginalHtml(course, week, lectureId);
      
      setState({
        htmlContent: originalHtml,
        isModified: false,
        loading: false,
        error: null,
      });
    } catch (error) {
      console.error('Error loading note preview:', error);
      setState({
        htmlContent: null,
        isModified: false,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to load note',
      });
    }
  }, [userId, course, week, lectureId]);

  // Load HTML content on mount and when dependencies change
  useEffect(() => {
    loadHtmlContent();
  }, [loadHtmlContent]);

  // Function to reload content
  const reload = useCallback(async () => {
    await loadHtmlContent();
  }, [loadHtmlContent]);

  // Function to update HTML content in state (without saving)
  const updateHtml = useCallback((newHtml: string) => {
    setState(prev => ({
      ...prev,
      htmlContent: newHtml,
      isModified: true,
    }));
  }, []);

  return {
    ...state,
    reload,
    updateHtml,
  };
}

/**
 * Cache for original HTML files (they never change)
 */
const originalHtmlCache = new Map<string, string>();

/**
 * Load original HTML with caching
 */
export async function loadOriginalHtmlCached(
  course: string,
  week: string,
  lectureId: string
): Promise<string> {
  const cacheKey = `${course}/${week}/${lectureId}`;
  
  // Check cache first
  if (originalHtmlCache.has(cacheKey)) {
    return originalHtmlCache.get(cacheKey)!;
  }

  // Load from file
  const html = await loadOriginalHtml(course, week, lectureId);
  
  // Cache it
  originalHtmlCache.set(cacheKey, html);
  
  return html;
}

/**
 * Clear the original HTML cache (useful for development)
 */
export function clearOriginalHtmlCache(): void {
  originalHtmlCache.clear();
}
