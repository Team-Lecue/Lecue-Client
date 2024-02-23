interface handleClickFiletoStringProps {
  file: File;
  reader: FileReader;
  handleTransformImgFile: (file: string | FileReader) => void;
}

const handleClickFiletoString = ({
  file,
  reader,
  handleTransformImgFile,
}: handleClickFiletoStringProps) => {
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    if (reader.result !== null) {
      handleTransformImgFile(reader.result as string);
    }
  };
};

export default handleClickFiletoString;
