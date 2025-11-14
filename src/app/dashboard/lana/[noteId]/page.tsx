'use client';
import * as React from 'react';
import NotePreviewLayout from '@/components/dashboard/note-preview-layout';
import { lanaNotesData } from '@/data/notes/lanaData';

export default function LanaNotePage({ params }: { params: Promise<{ noteId: string }> }) {
  const { noteId } = React.use(params);
  const decodedId = decodeURIComponent(noteId);
  const note = lanaNotesData.find(n => n.id === decodedId);

  return (
    <NotePreviewLayout
      courseName="LANA"
      courseTitle="Linear Algebra and Numeical Analysis"
      note={note}
      coursePath="/dashboard/lana"
    />
  );
}
