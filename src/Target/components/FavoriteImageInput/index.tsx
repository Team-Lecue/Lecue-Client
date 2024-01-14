import { useRef } from 'react';

import { IcCamera, ImgBook } from '../../../assets';
import { getPresignedUrl, uploadFile } from '../../util/api';
import * as S from './FavoriteImageInput.style';

interface FavoriteImageInputProps {
  imgFile: string;
  uploadImage: (file: string) => void;
  changePresignedFileName: (filename: string) => void;
}

function FavoriteImageInput({
  imgFile,
  uploadImage,
  changePresignedFileName,
}: FavoriteImageInputProps) {
  const imgRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = async (): Promise<void> => {
    const fileInput = imgRef.current;

    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];

      // reader1: 파일을 base64로 읽어서 업로드
      const reader1 = new FileReader();
      reader1.readAsDataURL(file);
      reader1.onloadend = () => {
        if (reader1.result !== null) {
          uploadImage(reader1.result as string);
        }
      };

      // reader2: 파일을 ArrayBuffer로 읽어서 PUT 요청 수행
      const reader2 = new FileReader();
      reader2.readAsArrayBuffer(file);
      reader2.onloadend = async () => {
        if (reader2.result !== null) {
          const { url, filename } = await getPresignedUrl('/api/images/book');
          await uploadFile(url, reader2.result as ArrayBuffer, file.type);
          changePresignedFileName(filename);
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
