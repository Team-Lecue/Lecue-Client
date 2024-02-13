export interface SelectColorProps {
  isIconClicked: boolean;
  lecueNoteState: {
    textColor: string;
    background: string;
    category?: string;
  };

  presignedUrlDispatch: React.Dispatch<{
    type: 'SET_PRESIGNED_URL';
    presignedUrl: string;
    filename: string;
  }>;

  selectedFile: (file: File) => void;
  handleCategoryFn: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  handleColorFn: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleIconFn: () => void;
  handleTransformImgFile: (file: string | FileReader) => void;
}

export interface ShowColorChartProps {
  isIconClicked: boolean;
  colorChart: string[];
  state: string;
  handleTransformImgFile: (file: string | FileReader) => void;
  selectedFile: (file: File) => void;
  handleFn: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleIconFn: () => void;

  presignedUrlDispatch: React.Dispatch<{
    type: 'SET_PRESIGNED_URL';
    presignedUrl: string;
    filename: string;
  }>;
}

export interface WriteNoteProps {
  imgFile: string;
  isIconClicked: boolean;
  lecueNoteState: {
    textColor: string;
    background: string;
    category?: string;
  };
  contents: string;
  handleChangeFn: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface FooterProps {
  contents: string;
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface getPresignedUrlProps {
  presignedUrlDispatch: React.Dispatch<{
    type: 'SET_PRESIGNED_URL';
    presignedUrl: string;
    filename: string;
  }>;
}

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
