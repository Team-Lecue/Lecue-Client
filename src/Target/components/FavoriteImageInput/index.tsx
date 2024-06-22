import imageCompression from 'browser-image-compression'; // browser-image-compression 라이브러리 추가
import { useEffect, useRef, useState } from 'react';

import { IcCamera, ImgBook } from '../../../assets';
import * as S from './FavoriteImageInput.style';

interface FavoriteImageInputProps {
  changeFileData: (file: File) => void;
}

function FavoriteImageInput({ changeFileData }: FavoriteImageInputProps) {
  const imgRef = useRef<HTMLInputElement | null>(null);
  const [imgFile, setImgFile] = useState<string>('');

  useEffect(() => {
    if (
      sessionStorage.getItem('image') &&
      sessionStorage.getItem('image') !== null
    ) {
      const a = sessionStorage.getItem('image');
      if (typeof a === 'string') {
        setImgFile(a);
      }
    }
  }, []);

  const handleImageUpload = async (): Promise<void> => {
    const fileInput = imgRef.current;

    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];

      // 이미지 압축 옵션 설정
      const options = {
        maxSizeMB: 1, // 최대 파일 크기 (MB)
        maxWidthOrHeight: 150, // 이미지의 최대 너비 또는 높이
        useWebWorker: true, // 웹 워커 사용 여부 (압축을 백그라운드에서 처리)
      };

      try {
        // 이미지 압축
        const compressedFile = await imageCompression(file, options);

        // 압축된 이미지를 base64 형식으로 변환
        const base64Result = await convertBlobToBase64(compressedFile);

        // 세션 스토리지에 압축된 이미지 저장
        sessionStorage.setItem('image', base64Result);

        // 이미지 변경 콜백 호출 및 UI 업데이트
        changeFileData(compressedFile);
        setImgFile(base64Result);
      } catch (error) {
        console.error('Error compressing image:', error);
      }
    }
  };

  // Blob을 base64 문자열로 변환하는 함수
  const convertBlobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
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
