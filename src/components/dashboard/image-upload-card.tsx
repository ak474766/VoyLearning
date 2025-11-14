'use client';
import * as React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2, Send, CheckCircle, AlertTriangle, File, Copy, X } from 'lucide-react';
import { Progress } from '../ui/progress';
import { useToast } from '@/hooks/use-toast';

export interface ImageUpload {
    id: string;
    file: File;
    status: 'compressing' | 'uploading' | 'complete' | 'error';
    progress?: number;
    downloadURL?: string;
    error?: string;
}

interface ImageUploadCardProps {
    upload: ImageUpload;
    onInstructionSubmit: (instruction: string) => void;
    onCancel: () => void;
}

export default function ImageUploadCard({ upload, onInstructionSubmit, onCancel }: ImageUploadCardProps) {
    const [instruction, setInstruction] = React.useState('');
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!instruction.trim()) return;
        onInstructionSubmit(instruction);
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        toast({ title: "Copied to clipboard!" });
    };

    const formatBytes = (bytes: number, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    
    const isProcessing = upload.status === 'compressing' || upload.status === 'uploading';

    return (
        <Card className="w-full max-w-sm bg-gray-800 border-gray-700 text-white">
            <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                    <div className="flex-shrink-0">
                        {upload.status === 'compressing' && <Loader2 className="h-6 w-6 animate-spin text-blue-400" />}
                        {upload.status === 'uploading' && <Loader2 className="h-6 w-6 animate-spin text-blue-400" />}
                        {upload.status === 'complete' && <CheckCircle className="h-6 w-6 text-green-400" />}
                        {upload.status === 'error' && <AlertTriangle className="h-6 w-6 text-red-400" />}
                        {!isProcessing && upload.status !== 'complete' && upload.status !== 'error' && <File className="h-6 w-6 text-gray-400" />}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{upload.file.name}</p>
                        <p className="text-xs text-gray-400">{formatBytes(upload.file.size)}</p>
                    </div>
                     <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-400 hover:bg-gray-700 hover:text-white" onClick={onCancel}>
                        <X className="h-4 w-4" />
                     </Button>
                </div>

                {isProcessing && (
                    <div className="space-y-1">
                        <p className="text-xs text-blue-300 capitalize">{upload.status}...</p>
                        <Progress value={upload.progress} className="h-1 bg-gray-600" />
                    </div>
                )}
                 {upload.status === 'error' && (
                    <p className="text-sm text-red-400">{upload.error}</p>
                 )}
            </CardContent>
            <CardFooter className="p-4 pt-0">
                 {upload.status === 'complete' ? (
                     <form onSubmit={handleSubmit} className="w-full flex items-center gap-2">
                        <Input
                            value={instruction}
                            onChange={(e) => setInstruction(e.target.value)}
                            placeholder="Ask anything..."
                            className="bg-gray-700 border-gray-600 focus:ring-blue-500"
                        />
                        <Button type="submit" size="icon" className="h-10 w-10 flex-shrink-0 bg-blue-600 hover:bg-blue-700">
                            <Send className="h-4 w-4" />
                        </Button>
                    </form>
                 ) : (
                    <Input
                        placeholder="Ask anything..."
                        disabled
                        className="bg-gray-900 border-gray-700 cursor-not-allowed"
                    />
                 )}
            </CardFooter>
             {upload.downloadURL && (
                <div className="px-4 pb-4">
                    <p className="text-xs text-gray-400 mb-1">Image URL:</p>
                    <div className="flex items-center gap-2">
                         <Input
                            readOnly
                            value={upload.downloadURL}
                            className="bg-gray-700 border-gray-600 text-xs h-8"
                        />
                        <Button variant="ghost" size="icon" className="h-8 w-8 flex-shrink-0 text-gray-400 hover:bg-gray-700 hover:text-white" onClick={() => copyToClipboard(upload.downloadURL!)}>
                            <Copy className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            )}
        </Card>
    );
}

    