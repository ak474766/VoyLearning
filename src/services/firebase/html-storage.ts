'use client';
import { getApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc, deleteDoc, collection, getDocs, serverTimestamp } from 'firebase/firestore';

export interface ModifiedHtmlMetadata {
  userId: string;
  week: string;
  lectureId: string;
  lastModified: number;
}

/**
 * Save modified HTML to Firebase Storage
 * Path: users/{userId}/modified-notes/{week}/{lectureId}.html
 */
export async function saveModifiedHtml(
  userId: string,
  week: string,
  lectureId: string,
  htmlContent: string
): Promise<string> {
  try {
    const app = getApp();
    const firestore = getFirestore(app);
    const docRef = doc(firestore, `users/${userId}/notes/${lectureId}`);
    await setDoc(docRef, {
      modifiedHtml: htmlContent,
      lastModified: serverTimestamp(),
    });
    // Return the document path for compatibility with previous string return type
    return docRef.path;
  } catch (error) {
    console.error('Error saving modified HTML:', error);
    throw new Error(`Failed to save modified HTML: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Load user's modified HTML from Firebase Storage
 * Returns null if no modified version exists
 */
export async function loadModifiedHtml(
  userId: string,
  week: string,
  lectureId: string
): Promise<string | null> {
  try {
    const app = getApp();
    const firestore = getFirestore(app);
    const docRef = doc(firestore, `users/${userId}/notes/${lectureId}`);
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) {
      return null;
    }
    const data = snapshot.data();
    if (typeof data?.modifiedHtml === 'string') {
      return data.modifiedHtml as string;
    }
    return null;
  } catch (error: any) {
    console.error('Error loading modified HTML:', error);
    return null;
  }
}

/**
 * Check if modified version exists for this user
 * Note: This just attempts to load - if it fails, file doesn't exist
 */
export async function hasModifiedVersion(
  userId: string,
  week: string,
  lectureId: string
): Promise<boolean> {
  try {
    const html = await loadModifiedHtml(userId, week, lectureId);
    return html !== null;
  } catch (error: any) {
    return false;
  }
}

/**
 * Delete user's modified version (reset to original)
 */
export async function deleteModifiedHtml(
  userId: string,
  week: string,
  lectureId: string
): Promise<void> {
  try {
    const app = getApp();
    const firestore = getFirestore(app);
    const docRef = doc(firestore, `users/${userId}/notes/${lectureId}`);
    await deleteDoc(docRef);
  } catch (error: any) {
    console.error('Error deleting modified HTML:', error);
    throw new Error(`Failed to delete modified HTML: ${error.message}`);
  }
}

/**
 * Load original HTML from codebase
 * Path: /notes/{course}/{lectureId}.html
 */
export async function loadOriginalHtml(
  course: string,
  week: string,
  lectureId: string
): Promise<string> {
  try {
    // Files are stored as /notes/{course}/{lectureId}.html (no week folder)
    const filePath = `/notes/${course}/${encodeURIComponent(lectureId)}.html`;
    const response = await fetch(filePath, {
      cache: 'force-cache', // Cache original HTML files
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const htmlContent = await response.text();
    return htmlContent;
  } catch (error) {
    console.error('Error loading original HTML:', error);
    throw new Error(`Failed to load original HTML: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Get all modified notes for a user
 */
export async function listModifiedNotes(userId: string): Promise<ModifiedHtmlMetadata[]> {
  try {
    const app = getApp();
    const firestore = getFirestore(app);
    const notesCol = collection(firestore, `users/${userId}/notes`);
    const snapshot = await getDocs(notesCol);
    const metadata: ModifiedHtmlMetadata[] = [];
    snapshot.forEach((docSnap) => {
      const data = docSnap.data() as any;
      const lm = data?.lastModified && typeof data.lastModified.toMillis === 'function'
        ? data.lastModified.toMillis()
        : Date.now();
      metadata.push({
        userId,
        week: '',
        lectureId: docSnap.id,
        lastModified: lm,
      });
    });
    return metadata;
  } catch (error) {
    console.error('Error listing modified notes:', error);
    return [];
  }
}

