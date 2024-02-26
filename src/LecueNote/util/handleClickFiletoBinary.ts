interface handleClickFiletoBinaryProps {
  file: File;
  reader: FileReader;
  handleReaderOnloadend: (reader: FileReader, file: File) => void;
}

const handleClickFiletoBinary = ({
  file,
  reader,
  handleReaderOnloadend,
}: handleClickFiletoBinaryProps) => {
  reader.readAsArrayBuffer(file);
  // reader1의 비동기 작업이 완료된 후 수행(onloadend() 활용)
  reader.onloadend = () => {
    handleReaderOnloadend(reader, file);
  };
};

export default handleClickFiletoBinary;
