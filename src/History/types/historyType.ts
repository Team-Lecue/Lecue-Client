export interface LecueBookType {
  bookUuid: string;
  bookId: number;
  favoriteName: string;
  title: string;
  bookDate: string;
  noteNum: number;
  isFavorite: boolean;
}

export interface LecueBookProps extends LecueBookType {
  key: number;
}
