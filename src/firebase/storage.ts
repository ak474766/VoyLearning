'use client';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, UploadTask } from 'firebase/storage';
import { getApp } from 'firebase/app';

export type UploadProgress = number;

export async function uploadToFirebase(
    userId: string,
    noteId: string,
    file: File,
    onProgress: (progress: UploadProgress) => void
): Promise<string> {
    const app = getApp();
    const storage = getStorage(app);
    const timestamp = new Date().getTime();
    const storagePath = `users/${userId}/noteImages/${noteId}/${timestamp}_${file.name}`;
    const storageRef = ref(storage, storagePath);

    return new Promise((resolve, reject) => {
        const uploadTask: UploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                onProgress(progress);
            },
            (error) => {
                console.error("Upload failed:", error);
                reject(error);
            },
            async () => {
                try {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    resolve(downloadURL);
                } catch (error) {
                    reject(error);
                }
            }
        );
    });
}

function toBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            // result is "data:image/jpeg;base64,LzlqLzRBQ...""
            // we only want the part after the comma
            if (typeof reader.result !== 'string') {
                return reject('FileReader did not return a string');
            }
            resolve(reader.result.substring(reader.result.indexOf(',') + 1));
        };
        reader.onerror = reject;
    });
}

export async function uploadToImgBB(
    file: File,
    onProgress: (progress: UploadProgress) => void
): Promise<string> {
    const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
    if(!apiKey) {
        throw new Error("ImgBB API key is not configured. Please set NEXT_PUBLIC_IMGBB_API_KEY environment variable.");
    }
    
    // ImgBB free tier has a 32MB limit. We can check here.
    if (file.size > 32 * 1024 * 1024) {
        throw new Error("File is too large for ImgBB's free tier (max 32MB).");
    }

    onProgress(50); // Simulate progress
    const base64string = await toBase64(file);
    
    const formData = new FormData();
    formData.append('image', base64string);

    const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: 'POST',
        body: formData,
    });
    
    onProgress(100);

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`ImgBB upload failed: ${errorData?.error?.message || response.statusText}`);
    }

    const result = await response.json();

    if (!result.data || !result.data.url) {
        throw new Error('ImgBB response did not contain a direct image URL.');
    }

    // Use `result.data.url` which is the direct link to the image.
    return result.data.url;
}
