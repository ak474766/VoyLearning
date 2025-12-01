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
import { Loader2, KeyRound, ShieldCheck, ExternalLink } from 'lucide-react';
import { doc, setDoc } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { cn } from '@/lib/utils';

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
      <DialogContent className="sm:max-w-[425px] bg-[#0A0A0A] border-white/10 text-white shadow-2xl p-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

        <div className="p-6 pb-0">
          <div className="flex items-center justify-center mb-6">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center ring-1 ring-white/10 shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]">
              <KeyRound className="h-8 w-8 text-indigo-400" />
            </div>
          </div>

          <DialogHeader className="text-center">
            <DialogTitle className="text-xl font-semibold text-white">Connect Gemini AI</DialogTitle>
            <DialogDescription className="text-white/60 mt-2">
              Enter your Google Gemini API key to unlock AI-powered features. Your key is stored securely.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <div className="relative">
              <Input
                id="apiKey"
                placeholder="AIzaSy..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                type="password"
                disabled={isLoading}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-indigo-500/50 pl-10 h-11"
              />
              <ShieldCheck className="absolute left-3 top-3 h-5 w-5 text-white/30" />
            </div>
            {error && <p className="text-xs text-red-400 flex items-center gap-1 animate-in slide-in-from-top-1"><span className="h-1 w-1 rounded-full bg-red-400" /> {error}</p>}
          </div>

          <div className="bg-blue-500/5 border border-blue-500/10 rounded-lg p-3 flex items-start gap-3">
            <div className="bg-blue-500/10 p-1.5 rounded-md">
              <ExternalLink className="h-4 w-4 text-blue-400" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-blue-200/80 leading-relaxed">
                Don't have a key? You can get one for free from Google AI Studio.
              </p>
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-blue-400 hover:text-blue-300 hover:underline mt-1 inline-block"
              >
                Get API Key &rarr;
              </a>
            </div>
          </div>
        </div>

        <DialogFooter className="p-6 pt-2 bg-white/5 border-t border-white/5">
          <Button variant="ghost" onClick={onClose} disabled={isLoading} className="text-white/60 hover:text-white hover:bg-white/5">Cancel</Button>
          <Button
            onClick={handleVerify}
            disabled={isLoading || !apiKey}
            className={cn(
              "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/20 transition-all duration-300",
              isLoading && "opacity-80"
            )}
          >
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            {isLoading ? 'Verifying...' : 'Verify & Continue'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
