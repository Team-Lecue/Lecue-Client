export type State = {
  presignedUrl: string;
  filename: string;
  contents: string;
  category: string;
  textColor: string;
  background: string;
  file: File | null;
  isIconClicked: boolean;
  imgToStr: string;
  imgToBinary: FileReader;
};

export type Action =
  | { type: 'SET_PRESIGNED_URL'; presignedUrl: string; filename: string }
  | { type: 'SET_CONTENTS'; contents: string }
  | { type: 'CLICKED_CATEGORY'; category: string }
  | { type: 'CLICKED_TEXT_COLOR'; color: string }
  | { type: 'CLICKED_BG_COLOR'; color: string }
  | { type: 'SELECTED_FILE'; file: File }
  | { type: 'CLICKED_IMG_ICON' }
  | { type: 'NOT_CLICKED_IMG_ICON' }
  | { type: 'IMG_TO_STR'; imgFile: string }
  | { type: 'IMG_TO_BINARY'; imgFile: FileReader }
  | { type: 'RESET_PREV_IMG'; };
