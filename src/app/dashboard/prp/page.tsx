'use client';
import CoursePageLayout from '@/components/dashboard/course-page-layout';
import { prpNotesData } from '@/data/notes/prpData';

export default function PrpPage() {
  return (
    <CoursePageLayout
      courseName="PRP"
      courseTitle="Pattern Recognition Principles"
      notesData={prpNotesData}
    />
  );
}
