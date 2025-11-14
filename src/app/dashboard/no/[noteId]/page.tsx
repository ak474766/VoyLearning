'use client';
import * as React from 'react';
import NotePreviewLayout from '@/components/dashboard/note-preview-layout';
import { noNotesData } from '@/data/notes/noData';

export default function NoNotePage({ params }: { params: Promise<{ noteId: string }> }) {
  const { noteId } = React.use(params);
  const decodedId = decodeURIComponent(noteId);
  const note = noNotesData.find(n => n.id === decodedId);

  return (
    <NotePreviewLayout
      courseName="NO"
      courseTitle="Numerical Optimization"
      note={note}
      coursePath="/dashboard/no"
    />
  );
}
