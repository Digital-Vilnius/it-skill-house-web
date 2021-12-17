import { Note as ApiNote } from 'api/clients/notes/types';
import { Note, NoteFormData } from './types';
import { DateUtils } from 'utils';

export const mapNote = (note: ApiNote): Note => ({
  ...note,
  date: DateUtils.formatDateStringStrict(note.date),
});

export const mapNoteFormData = (note: Note): NoteFormData => ({
  title: note.title,
  content: note.content,
  date: DateUtils.formatDateStringStrict(note.date),
});
