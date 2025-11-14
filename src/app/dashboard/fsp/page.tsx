'use client';
import CoursePageLayout from '@/components/dashboard/course-page-layout';
import { fspNotesData } from '@/data/notes/fspData';

export default function FspPage() {
  return (
    <CoursePageLayout
      courseName="FSP"
      courseTitle="Foundations of Statistics and Probability"
      notesData={fspNotesData}
    />
  );
}
