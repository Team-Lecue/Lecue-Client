export interface putPresignedUrlProps {
  presignedUrl: string;
  binaryFile: string | ArrayBuffer;
  fileType: string;
}

export interface postLecueNoteProps {
  contents: string;
  color: string;
  fileName: string;
  bgColor: string;
  isIconClicked: boolean;
  bookId: number;
}

export interface getPresignedUrlProps {
  presignedUrlDispatch: React.Dispatch<{
    type: 'SET_PRESIGNED_URL';
    presignedUrl: string;
    filename: string;
  }>;
}

interface SelectColorType extends getPresignedUrlProps {
  selectedFile: (file: File) => void;
  handleColorFn: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleIconFn: () => void;
  handleTransformImgFile: (file: string | FileReader) => void;
  handleIsLoading: (status: boolean) => void;
}

interface LecueNoteStateType {
  lecueNoteState: {
    isIconClicked: boolean;
    textColor: string;
    background: string;
    category?: string;
    contents?: string;
  };
}

export interface SelectColorProps extends SelectColorType, LecueNoteStateType {
  handleCategoryFn: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}

export interface ShowColorChartProps extends SelectColorType {
  isIconClicked: boolean;
  colorChart: string[];
  selectedColor: string;
  contents?: string;
}

export interface WriteNoteProps extends LecueNoteStateType {
  isLoading: boolean;
  imgFile: string;
  handleChangeFn: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleResetPrevImg: () => void;
}

export interface FooterProps {
  contents: string;
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
}
