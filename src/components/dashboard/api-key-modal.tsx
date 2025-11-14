'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { doc, setDoc } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

type ApiKeyModalProps = {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
  onKeyVerified: () => void;
};

/**
 * Validates the Gemini API key by making a real API call to list models.
 * @param apiKey The Gemini API key to validate
 * @returns Promise that resolves to true if valid, false otherwise
 */
async function validateApiKey(apiKey: string): Promise<boolean> {
    if (!apiKey || !apiKey.trim()) return false;
    
    // Basic format check first
    if (!apiKey.startsWith('AIza') || apiKey.length < 30) {
        return false;
    }
    
    try {
        // Make a real API call to verify the key works
        const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models', {
            method: 'GET',
            headers: {
                'x-goog-api-key': apiKey
            }
        });
        
        return response.ok;
    } catch (error) {
        console.error('API key validation error:', error);
        return false;
    }
}


export default function ApiKeyModal({ isOpen, onClose, userId, onKeyVerified }: ApiKeyModalProps) {
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const firestore = useFirestore();

  const handleVerify = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const isValid = await validateApiKey(apiKey);

      if (!isValid) {
        setError('Invalid API key. Please verify your Gemini API key and try again.');
        setIsLoading(false);
        return;
      }

      // Save the validated API key to Firestore
      const userSettingsRef = doc(firestore, `users/${userId}/settings/gemini`);
      
      await setDoc(userSettingsRef, { 
        apiKey,
        updatedAt: new Date().toISOString()
      }, { merge: true });

      toast({
        title: 'API Key Verified!',
        description: 'Your Gemini API key has been validated and saved securely.',
      });
      
      onKeyVerified();
    } catch (e: any) {
      console.error('Error verifying API key:', e);
      
      if (e.code === 'permission-denied') {
        setError('Permission denied. Please ensure you are logged in.');
        toast({
          variant: 'destructive',
          title: 'Permission Error',
          description: 'You do not have permission to save settings.',
        });
      } else {
        setError('Could not save your API key. Please check your connection and try again.');
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Failed to save API key. Please try again.',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enter Gemini API Key</DialogTitle>
          <DialogDescription>
            To use the AI assistant, please provide your Gemini API key. This will be stored securely and used only for your requests.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            id="apiKey"
            placeholder="Enter your Gemini API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            type="password"
            disabled={isLoading}
          />
          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isLoading}>Cancel</Button>
          <Button onClick={handleVerify} disabled={isLoading || !apiKey}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            {isLoading ? 'Verifying...' : 'Verify & Continue'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
