export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tag: string;
}

export type NoteTag = 'Todo' | 'Work' | 'Personal' | 'Meeting' | 'Shopping';

export type SortBy = 'created' | 'updated';

export interface CreatedNote {
  title: string;
  content: string;
  tag: string;
}
