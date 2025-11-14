'use client';
import * as React from 'react';
import NotePreviewLayout from '@/components/dashboard/note-preview-layout';
import { bdaNotesData } from '@/data/notes/bdaData';

export default function BdaNotePage({ params }: { params: Promise<{ noteId: string }> }) {
  const { noteId } = React.use(params);
  const decodedId = decodeURIComponent(noteId);
  const note = bdaNotesData.find(n => n.id === decodedId);

  return (
    <NotePreviewLayout
      courseName="BDA"
      courseTitle="Backend Development Approach"
      note={note}
      coursePath="/dashboard/bda"
    />
  );
}
