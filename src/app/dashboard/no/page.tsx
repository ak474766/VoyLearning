'use client';
import CoursePageLayout from '@/components/dashboard/course-page-layout';
import { noNotesData } from '@/data/notes/noData';

export default function NoPage() {
  return (
    <CoursePageLayout
      courseName="NO"
      courseTitle="Numerical Optimization"
      notesData={noNotesData}
    />
  );
}
