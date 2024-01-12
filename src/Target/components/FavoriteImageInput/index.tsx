import { useRef } from 'react';

import { IcCamera, ImgBook } from '../../../assets';
import * as S from './FavoriteImageInput.style';

interface FavoriteImageInputProps {
  imgFile: string;
  uploadImage: (file: string) => void;
}

function FavoriteImageInput({ imgFile, uploadImage }: FavoriteImageInputProps) {
  const imgRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = () => {
    const fileInput = imgRef.current;

    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        if (reader.result !== null) {
          uploadImage(reader.result as string);
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
