'use client';
import CoursePageLayout from '@/components/dashboard/course-page-layout';
import { vsdNotesData } from '@/data/notes/vsdData';

export default function VsdPage() {
  return (
    <CoursePageLayout
      courseName="VSD"
      courseTitle="Visualization and Storytelling with Data"
      notesData={vsdNotesData}
    />
  );
}
