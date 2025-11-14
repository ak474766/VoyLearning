export interface NoteData {
  id: string;
  title: string;
  description: string;
  week: number;
  lesson: number;
  tags: string[];
  dateAdded: string;
  readTime: string;
  htmlFile: string;
}
