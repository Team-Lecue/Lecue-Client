export interface LecueBookType {
  bookUuid: string;
  bookId: number;
  favoriteName: string;
  title: string;
  bookDate: string;
  noteNum: number;
}

export interface LecueBookProps extends LecueBookType {
  key: number;
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

export interface LecueNoteProps extends LecueNoteType {
  key: number;
  noteList: LecueNoteType[];
}

export interface ModalProps {
  bookUuid: string;
  selectedNote: LecueNoteType;
  handleCloseBtn: () => void;
}

export interface EmptyViewProps {
  clickedBtn: string;
}
