import { SelectColorProps } from '../../LecueNote/type/lecueNoteType';

export type createBookType = Omit<
  SelectColorProps,
  'clickedBgColor' | 'clickedCategory'
>;

export interface BookInfoSectionProps {
  backgroundColor: string;
  description: string;
  changeDescription: (description: string) => void;
}

export interface CompleteButtonProps {
  isActive: boolean;
  onClick: () => void;
  backgroundColor: string;
}

export interface BookInfoTextareaProps {
  description: string;
  changeDescription: (description: string) => void;
}

export interface BookInputProps {
  title: string;
  changeTitle: (title: string) => void;
}

export interface BookInputSectionProps {
  backgroundColor: string;
  title: string;
  changeTitle: (title: string) => void;
}

export interface ShowColorChartProps {
  backgroundColor: string;
  handleFn: (backgroundColor: string) => void;
}
