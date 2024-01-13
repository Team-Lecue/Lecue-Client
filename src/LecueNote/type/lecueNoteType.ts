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
  handleIconFn: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface ShowColorChartProps {
  isIconClicked: boolean;
  colorChart: string[];
  state: string;
  handleFn: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleIconFn: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface WriteNoteProps extends CreateNoteProps {
  isIconClicked: boolean;
  clickedBgColor: string;
  clickedTextColor: string;
}

export interface FooterProps {
  contents: string;
}
