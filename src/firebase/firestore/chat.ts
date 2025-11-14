'use client';
import {
  collection,
  addDoc,
  serverTimestamp,
  writeBatch,
  getDocs,
  query,
  Firestore,
} from 'firebase/firestore';

export const saveChatMessage = async (
  firestore: Firestore,
  userId: string,
  noteId: string,
  role: 'user' | 'assistant',
  content: string,
  imageUrl?: string
) => {
  const messagesRef = collection(firestore, `users/${userId}/noteChats/${noteId}/messages`);
  const messageData: any = {
    role,
    content,
    timestamp: serverTimestamp(),
  };

  if (imageUrl) {
    messageData.imageUrl = imageUrl;
  }

  await addDoc(messagesRef, messageData);
};

export const clearChatHistory = async (firestore: Firestore, userId: string, noteId: string) => {
    const messagesRef = collection(firestore, `users/${userId}/noteChats/${noteId}/messages`);
    const q = query(messagesRef);
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
        return;
    }

    const batch = writeBatch(firestore);
    querySnapshot.forEach(doc => {
        batch.delete(doc.ref);
    });

    await batch.commit();
}