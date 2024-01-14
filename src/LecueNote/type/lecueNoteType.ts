export interface CreateNoteProps {
  contents: string;
  handleChangeFn: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
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

export interface WriteNoteProps extends CreateNoteProps {
  imgFile: string;
  isIconClicked: boolean;
  clickedBgColor: string;
  clickedTextColor: string;
}

export interface FooterProps {
  contents: string;
}
