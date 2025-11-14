'use client';
import * as React from 'react';
import NotePreviewLayout from '@/components/dashboard/note-preview-layout';
import { fspNotesData } from '@/data/notes/fspData';

export default function FspNotePage({ params }: { params: Promise<{ noteId: string }> }) {
  const { noteId } = React.use(params);
  const decodedId = decodeURIComponent(noteId);
  const note = fspNotesData.find(n => n.id === decodedId);

  return (
    <NotePreviewLayout
      courseName="FSP"
      courseTitle="Full Stack Projects"
      note={note}
      coursePath="/dashboard/fsp"
    />
  );
}
