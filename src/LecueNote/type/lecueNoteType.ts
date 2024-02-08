export interface SelectColorProps {
  isIconClicked: boolean;
  clickedData: {
    textColor: string;
    background: string;
    category?: string;
  };
  selectedFile: (file: File) => void;
  setPresignedUrl: React.Dispatch<React.SetStateAction<string>>;
  setFileName: React.Dispatch<React.SetStateAction<string>>;
  handleCategoryFn: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  handleColorFn: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleIconFn: () => void;
  handleTrainsitImgFile: (file: string | FileReader) => void;
}

export interface ShowColorChartProps {
  isIconClicked: boolean;
  colorChart: string[];
  state: string;
  handleTrainsitImgFile: (file: string | FileReader) => void;
  selectedFile: (file: File) => void;
  setPresignedUrl: React.Dispatch<React.SetStateAction<string>>;
  setFileName: React.Dispatch<React.SetStateAction<string>>;
  handleFn: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleIconFn: () => void;
}

export interface WriteNoteProps {
  imgFile: string;
  isIconClicked: boolean;
  clickedData: {
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

export interface getPresignedUrlPrps {
  setPresignedUrl: React.Dispatch<React.SetStateAction<string>>;
  setFileName: React.Dispatch<React.SetStateAction<string>>;
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
