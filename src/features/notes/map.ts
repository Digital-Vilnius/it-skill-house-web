import { Note as ApiNote } from 'api/clients/notes/types';
import { Note, NoteFormData } from './types';

export const mapNote = (note: ApiNote): Note => note;

export const mapNoteFormData = (note: Note): NoteFormData => note;
