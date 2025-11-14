'use client';
import * as React from 'react';
import NotePreviewLayout from '@/components/dashboard/note-preview-layout';
import { faiNotesData } from '@/data/notes/faiData';

export default function FaiNotePage({ params }: { params: Promise<{ noteId: string }> }) {
  const { noteId } = React.use(params);
  const decodedId = decodeURIComponent(noteId);
  const note = faiNotesData.find(n => n.id === decodedId);

  return (
    <NotePreviewLayout
      courseName="FAI"
      courseTitle="Foundations of AI"
      note={note}
      coursePath="/dashboard/fai"
    />
  );
}
