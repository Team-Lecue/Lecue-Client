import handleClickFiletoBinary from './handleClickFiletoBinary';
import handleClickFiletoString from './handleClickFiletoString';

interface handleClickHeicToJpgProps {
  file: File;
  handleTransformImgFile: (file: string | FileReader) => void;
  handleReaderOnloadend: (reader: FileReader, file: File) => void;
  handleIsLoading: (status: boolean) => void;
}

const handleClickHeicToJpg = async ({
  file,
  handleTransformImgFile,
  handleReaderOnloadend,
  handleIsLoading,
}: handleClickHeicToJpgProps) => {
  handleIsLoading(true);

  const { default: heic2any } = await import('heic2any');

  heic2any({ blob: file, toType: 'image/jpeg' })
    .then(function (resultBlob) {
      // 변환된 Blob을 사용하여 새로운 File 생성
      const jpg = new File(
        Array.isArray(resultBlob) ? resultBlob : [resultBlob],
        file.name.split('.')[0] + '.jpg',
        { type: 'image/jpeg', lastModified: new Date().getTime() },
      );

      // reader1: 파일을 base64로 읽어서 업로드
      const reader1 = new FileReader();
      handleClickFiletoString({
        file: jpg,
        reader: reader1,
        handleTransformImgFile,
      });

      // reader2: 파일을 ArrayBuffer로 읽어서 PUT 요청 수행
      const reader2 = new FileReader();
      handleClickFiletoBinary({
        file: jpg,
        reader: reader2,
        handleReaderOnloadend,
      });
    })
    .finally(() => handleIsLoading(false));
};

export default handleClickHeicToJpg;
