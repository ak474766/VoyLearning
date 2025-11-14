'use client';
import * as React from 'react';
import NotePreviewLayout from '@/components/dashboard/note-preview-layout';
import { ataNotesData } from '@/data/notes/ataData';

export default function AtaNotePage({ params }: { params: Promise<{ noteId: string }> }) {
  const { noteId } = React.use(params);
  const decodedId = decodeURIComponent(noteId);
  const note = ataNotesData.find(n => n.id === decodedId);

  return (
    <NotePreviewLayout
      courseName="ATA"
      courseTitle="Advanced Topics in Algorithms"
      note={note}
      coursePath="/dashboard/ata"
    />
  );
}
