import { useEffect, useRef, useState } from 'react';

import { IcCamera, ImgBook } from '../../../assets';
import * as S from './FavoriteImageInput.style';

interface FavoriteImageInputProps {
  changeFileData: (file: File) => void;
}

function FavoriteImageInput({ changeFileData }: FavoriteImageInputProps) {
  const imgRef = useRef<HTMLInputElement | null>(null);
  const [imgFile, setImgFile] = useState('');

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

      const base64Reader = new FileReader();
      base64Reader.readAsDataURL(file);
      base64Reader.onloadend = () => {
        if (base64Reader.result !== null) {
          sessionStorage.setItem('image', base64Reader.result as string);
          changeFileData(file);
          setImgFile(base64Reader.result as string);
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
