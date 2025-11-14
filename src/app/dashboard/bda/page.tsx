'use client';
import CoursePageLayout from '@/components/dashboard/course-page-layout';
import { bdaNotesData } from '@/data/notes/bdaData';

export default function BdaPage() {
  return (
    <CoursePageLayout
      courseName="BDA"
      courseTitle="Basics of Data Analytics"
      notesData={bdaNotesData}
    />
  );
}
