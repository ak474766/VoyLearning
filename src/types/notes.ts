export interface NoteData {
  id: string;
  title: string;
  description: string;
  week: number | string;
  lesson: number | string;
  tags: string[];
  dateAdded: string;
  readTime: string;
  htmlFile: string;
}
