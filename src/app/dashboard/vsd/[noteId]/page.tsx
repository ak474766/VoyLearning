'use client';
import * as React from 'react';
import NotePreviewLayout from '@/components/dashboard/note-preview-layout';
import { vsdNotesData } from '@/data/notes/vsdData';

export default function VsdNotePage({ params }: { params: Promise<{ noteId: string }> }) {
  const { noteId } = React.use(params);
  const decodedId = decodeURIComponent(noteId);
  const note = vsdNotesData.find(n => n.id === decodedId);

  return (
    <NotePreviewLayout
      courseName="VSD"
      courseTitle="Visualization and Storytelling with Data"
      note={note}
      coursePath="/dashboard/vsd"
    />
  );
}
