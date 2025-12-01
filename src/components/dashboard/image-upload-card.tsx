'use client';
import * as React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2, Send, CheckCircle2, AlertTriangle, FileImage, Copy, X, Image as ImageIcon } from 'lucide-react';
import { Progress } from '../ui/progress';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

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
        <Card className="w-full max-w-sm bg-[#1a1a1a]/80 backdrop-blur-xl border-white/10 text-white shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50" />

            <CardContent className="p-4">
                <div className="flex items-start gap-3 mb-3">
                    <div className={cn(
                        "flex-shrink-0 h-10 w-10 rounded-lg flex items-center justify-center ring-1 ring-white/10",
                        upload.status === 'complete' ? "bg-green-500/10 text-green-400" :
                            upload.status === 'error' ? "bg-red-500/10 text-red-400" :
                                "bg-blue-500/10 text-blue-400"
                    )}>
                        {upload.status === 'compressing' && <Loader2 className="h-5 w-5 animate-spin" />}
                        {upload.status === 'uploading' && <Loader2 className="h-5 w-5 animate-spin" />}
                        {upload.status === 'complete' && <CheckCircle2 className="h-5 w-5" />}
                        {upload.status === 'error' && <AlertTriangle className="h-5 w-5" />}
                        {!isProcessing && upload.status !== 'complete' && upload.status !== 'error' && <FileImage className="h-5 w-5" />}
                    </div>

                    <div className="flex-1 min-w-0 pt-0.5">
                        <p className="text-sm font-medium truncate text-white/90">{upload.file.name}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                            <p className="text-[10px] text-white/50">{formatBytes(upload.file.size)}</p>
                            {upload.status === 'complete' && <span className="text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-full">Ready</span>}
                        </div>
                    </div>

                    <Button variant="ghost" size="icon" className="h-6 w-6 -mr-1 text-white/30 hover:bg-white/10 hover:text-white rounded-full" onClick={onCancel}>
                        <X className="h-3.5 w-3.5" />
                    </Button>
                </div>

                {isProcessing && (
                    <div className="space-y-1.5 mt-2">
                        <div className="flex justify-between text-[10px] text-blue-300/80 uppercase tracking-wider font-semibold">
                            <span>{upload.status}...</span>
                            <span>{Math.round(upload.progress || 0)}%</span>
                        </div>
                        <Progress value={upload.progress} className="h-1 bg-white/10" />
                    </div>
                )}

                {upload.status === 'error' && (
                    <div className="mt-2 p-2 bg-red-500/10 border border-red-500/20 rounded-md">
                        <p className="text-xs text-red-300 leading-tight">{upload.error}</p>
                    </div>
                )}
            </CardContent>

            <CardFooter className="p-4 pt-0 flex flex-col gap-3">
                {upload.status === 'complete' ? (
                    <form onSubmit={handleSubmit} className="w-full flex items-center gap-2">
                        <Input
                            value={instruction}
                            onChange={(e) => setInstruction(e.target.value)}
                            placeholder="Add instructions for this image..."
                            className="bg-white/5 border-white/10 focus-visible:ring-purple-500/50 text-xs h-9 text-white placeholder:text-white/30"
                            autoFocus
                        />
                        <Button type="submit" size="icon" className="h-9 w-9 flex-shrink-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20">
                            <Send className="h-3.5 w-3.5" />
                        </Button>
                    </form>
                ) : (
                    <div className="w-full h-9 bg-white/5 border border-white/5 rounded-md flex items-center px-3 text-xs text-white/20 select-none">
                        Waiting for upload...
                    </div>
                )}

                {upload.downloadURL && (
                    <div className="w-full pt-2 border-t border-white/5">
                        <div className="flex items-center gap-2 group">
                            <div className="flex-1 bg-black/20 rounded px-2 py-1.5 border border-white/5 truncate">
                                <p className="text-[10px] text-white/40 truncate font-mono">{upload.downloadURL}</p>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-7 w-7 flex-shrink-0 text-white/40 hover:bg-white/10 hover:text-white"
                                onClick={() => copyToClipboard(upload.downloadURL!)}
                                title="Copy URL"
                            >
                                <Copy className="h-3.5 w-3.5" />
                            </Button>
                        </div>
                    </div>
                )}
            </CardFooter>
        </Card>
    );
}