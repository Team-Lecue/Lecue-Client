export interface CreateNoteProps {
  clickedCategory: string;
  clickedTextColor: string;
  clickedBgColor: string;
  isIconClicked: boolean;
  imgFile: string;
  contents: string;
  handleChangeFn: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleClickCategory: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  handleClickedColorBtn: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  handleClickedIcon: () => void;
  uploadImage: (file: string) => void;
}

export interface SelectColorProps {
  isIconClicked: boolean;
  clickedCategory: string;
  clickedTextColor: string;
  clickedBgColor: string;
  handleCategoryFn: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  handleColorFn: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleIconFn: () => void;
  uploadImage: (file: string) => void;
}

export interface ShowColorChartProps {
  isIconClicked: boolean;
  colorChart: string[];
  state: string;
  uploadImage: (file: string) => void;
  handleFn: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleIconFn: () => void;
}

export interface WriteNoteProps {
  imgFile: string;
  isIconClicked: boolean;
  clickedBgColor: string;
  clickedTextColor: string;
  contents: string;
  handleChangeFn: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface FooterProps {
  contents: string;
  imgFile: string;
}
