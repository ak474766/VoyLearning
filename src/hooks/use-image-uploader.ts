'use client';

import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { uploadToFirebase, uploadToImgBB } from '@/firebase/storage';
import imageCompression from 'browser-image-compression';

export interface ImageUpload {
    id: string;
    file: File;
    status: 'compressing' | 'uploading' | 'complete' | 'error';
    progress?: number;
    downloadURL?: string;
    error?: string;
}

const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export function useImageUploader(userId: string, noteId: string, method: 'firebase' | 'imgbb') {
    const [imageUpload, setImageUpload] = useState<ImageUpload | null>(null);
    const { toast } = useToast();

    const uploadImage = async (file: File) => {
        if (!userId) {
            toast({ variant: 'destructive', title: 'Error', description: 'You must be logged in to upload images.' });
            return;
        }
        
        // Validate file type
        if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
            toast({ 
                variant: 'destructive', 
                title: 'Invalid File Type', 
                description: 'Please upload a valid image file (JPEG, PNG, GIF, or WebP).' 
            });
            return;
        }
        
        // Validate file size
        if (file.size > MAX_FILE_SIZE) {
            toast({ 
                variant: 'destructive', 
                title: 'File Too Large', 
                description: 'Image must be smaller than 10MB.' 
            });
            return;
        }

        const uploadId = `upload-${Date.now()}`;
        setImageUpload({
            id: uploadId,
            file,
            status: 'compressing',
            progress: 0,
        });

        try {
            const options = { maxSizeMB: 1, maxWidthOrHeight: 1920, useWebWorker: true, initialQuality: 0.8 };
            const compressedFile = await imageCompression(file, options);
            
            setImageUpload(prev => prev ? { ...prev, status: 'uploading' } : null);

            let downloadURL: string;
            
            if (method === 'firebase') {
                downloadURL = await uploadToFirebase(userId, noteId, compressedFile, (progress) => {
                    setImageUpload(prev => prev ? { ...prev, progress } : null);
                });
            } else { // 'imgbb'
                downloadURL = await uploadToImgBB(compressedFile, (progress) => {
                    setImageUpload(prev => prev ? { ...prev, progress } : null);
                });
            }
            
            setImageUpload(prev => prev ? { ...prev, status: 'complete', downloadURL } : null);

        } catch (error: any) {
            console.error("Image upload error:", error);
            const errorMessage = error.message || 'Upload failed. Please try again.';
            setImageUpload(prev => prev ? { ...prev, status: 'error', error: errorMessage } : null);
            toast({
                variant: 'destructive',
                title: 'Upload Error',
                description: errorMessage,
            });
        }
    };
    
    const cancelUpload = () => {
        // In a real app, you might need to cancel the ongoing fetch/upload task.
        // For simplicity here, we're just clearing the UI state.
        setImageUpload(null);
    };

    return {
        imageUpload,
        uploadImage,
        cancelUpload
    };
}
