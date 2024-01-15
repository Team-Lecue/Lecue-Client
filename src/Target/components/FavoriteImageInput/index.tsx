import { useEffect, useRef, useState } from 'react';

import { IcCamera, ImgBook } from '../../../assets';
import { getPresignedUrl, uploadFile } from '../../util/api';
import * as S from './FavoriteImageInput.style';

interface FavoriteImageInputProps {
  imgFile: string;
  uploadImage: (file: string) => void;
  changePresignedFileName: (fileName: string) => void;
}

function FavoriteImageInput({
  imgFile,
  uploadImage,
  changePresignedFileName,
}: FavoriteImageInputProps) {
  const imgRef = useRef<HTMLInputElement | null>(null);
  const [presignedData, setPresignedData] = useState({
    url: '',
    fileName: '',
  });

  useEffect(() => {
    const fetchPresignedData = async () => {
      const { url, fileName } = await getPresignedUrl('/api/images/book');
      setPresignedData({ url, fileName });
      changePresignedFileName(fileName);
    };

    fetchPresignedData();
  }, []);

  const handleImageUpload = async (): Promise<void> => {
    const fileInput = imgRef.current;

    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];

      const base64Reader = new FileReader();
      base64Reader.readAsDataURL(file);
      base64Reader.onloadend = () => {
        if (base64Reader.result !== null) {
          uploadImage(base64Reader.result as string);
        }
      };

      const binaryReader = new FileReader();
      binaryReader.readAsArrayBuffer(file);
      binaryReader.onloadend = async () => {
        if (binaryReader.result !== null) {
          await uploadFile(
            presignedData.url,
            binaryReader.result as ArrayBuffer,
            file.type,
          );
        }
      };
    }
  };

  return (
    <S.FavoriteImageInputWrapper>
      <S.ImageUploadLabel htmlFor="previewImg">
        {imgFile ? <S.UploadedImage src={imgFile} /> : <IcCamera />}
      </S.ImageUploadLabel>
      <ImgBook />
      <S.ImageUploadInput
        type="file"
        accept="image/*"
        id="previewImg"
        onChange={handleImageUpload}
        ref={imgRef}
      />
    </S.FavoriteImageInputWrapper>
  );
}

export default FavoriteImageInput;
