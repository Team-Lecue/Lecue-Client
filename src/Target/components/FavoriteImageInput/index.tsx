import { useEffect, useRef, useState } from 'react';

import { IcCamera, ImgBook } from '../../../assets';
import useGetPresignedUrl from '../../hooks/usegetPresignedUrl';
import usePutPresignedUrl from '../../hooks/usePutPresignedUrl';
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

  const { isLoading, error, data } = useGetPresignedUrl();
  const putMutation = usePutPresignedUrl();

  useEffect(() => {
    const fetchPresignedData = async () => {
      if (data) {
        const { url, fileName } = data;
        setPresignedData({ url, fileName });
        changePresignedFileName(fileName);
      }
    };

    fetchPresignedData();
  });

  // 로딩 핸들링
  if (isLoading) {
    return <div>로딩중</div>;
  }

  // 에러 핸들링
  if (error) {
    return <div>에러 발생</div>;
  }

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
          putMutation.mutate({
            url: presignedData.url,
            data: binaryReader.result as ArrayBuffer,
            contentType: file.type,
          });
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
