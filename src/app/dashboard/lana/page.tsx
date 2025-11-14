'use client';
import CoursePageLayout from '@/components/dashboard/course-page-layout';
import { lanaNotesData } from '@/data/notes/lanaData';

export default function LanaPage() {
  return (
    <CoursePageLayout
      courseName="LANA"
      courseTitle="Linear Algebra and Numeical Analysis"
      notesData={lanaNotesData}
    />
  );
}
