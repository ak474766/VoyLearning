'use client';
import * as React from 'react';
import NotePreviewLayout from '@/components/dashboard/note-preview-layout';
import { prpNotesData } from '@/data/notes/prpData';

export default function PrpNotePage({ params }: { params: Promise<{ noteId: string }> }) {
  const { noteId } = React.use(params);
  const decodedId = decodeURIComponent(noteId);
  const note = prpNotesData.find(n => n.id === decodedId);

  return (
    <NotePreviewLayout
      courseName="PRP"
      courseTitle="Pattern Recognition Principles"
      note={note}
      coursePath="/dashboard/prp"
    />
  );
}
