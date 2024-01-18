export interface LecueBookProps {
  key: number;
  bookUuid: string;
  bookId: number;
  favoriteName: string;
  title: string;
  bookDate: string;
  noteNum: number;
}

export interface LecueNoteProps {
  bookUuid: string;
  key: number;
  noteId: number;
  favoriteName: string;
  title: string;
  noteDate: string;
  content: string;
  noteTextColor: string;
  noteBackground: string;
  noteList: LecueNoteType[];
}

export interface LecueBookType {
  bookUuid: string;
  bookId: number;
  favoriteName: string;
  title: string;
  bookDate: string;
  noteNum: number;
}

export interface LecueNoteType {
  bookUuid: string;
  noteId: number;
  favoriteName: string;
  title: string;
  noteDate: string;
  content: string;
  noteTextColor: string;
  noteBackground: string;
}
