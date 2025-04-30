export interface NameInputProps {
  name: string;
  changeName: (name: string) => void;
}

export interface FavoriteImageInputProps {
  changeFileData: (file: File) => void;
}
