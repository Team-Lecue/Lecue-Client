import { SelectColorProps } from '../../LecueNote/type/lecueNoteType';

export type createBookType = Omit<
  SelectColorProps,
  'clickedBgColor' | 'clickedCategory'
>;
