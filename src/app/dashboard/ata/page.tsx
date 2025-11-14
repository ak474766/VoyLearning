'use client';
import CoursePageLayout from '@/components/dashboard/course-page-layout';
import { ataNotesData } from '@/data/notes/ataData';

export default function AtaPage() {
  return (
    <CoursePageLayout
      courseName="ATA"
      courseTitle="Algorithmic Thinking and its Applications"
      notesData={ataNotesData}
    />
  );
}
