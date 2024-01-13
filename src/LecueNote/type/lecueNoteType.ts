export interface SelectColorProps {
  clickedCategory: string;
  clickedTextColor: string;
  clickedBgColor: string;
  handleCategoryFn: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  handleColorFn: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface ShowColorChartProps {
  colorChart: string[];
  state: string;
  handleFn: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface WriteNoteProps {
  clickedBgColor: string;
  clickedTextColor: string;
}
