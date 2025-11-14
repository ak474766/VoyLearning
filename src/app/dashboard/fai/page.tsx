'use client';
import CoursePageLayout from '@/components/dashboard/course-page-layout';
import { faiNotesData } from '@/data/notes/faiData';

export default function FaiPage() {
  return (
    <CoursePageLayout
      courseName="FAI"
      courseTitle="Foundations of AI"
      notesData={faiNotesData}
    />
  );
}
