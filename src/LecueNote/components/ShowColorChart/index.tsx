import { useEffect, useRef, useState } from 'react';

import { IcCameraSmall } from '../../../assets';
import { api } from '../../../libs/api';
import { BG_COLOR_CHART } from '../../constants/colorChart';
import { ShowColorChartProps } from '../../type/lecueNoteType';
import * as S from './ShowColorChart.style';

function ShowColorChart({
  isIconClicked,
  colorChart,
  state,
  setFileName,
  uploadImage,
  handleFn,
  handleIconFn,
}: ShowColorChartProps) {
  const imgRef = useRef<HTMLInputElement | null>(null);
  const [presignedUrl, setPresignedUrl] = useState('');

  const getPresignedUrl = () => {
    api.get('/api/images/note').then((res) => {
      setPresignedUrl(res.data.data.url);
      setFileName(res.data.data.fileName);
    });
  };

  const handleImageUpload = () => {
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
      reader2.onloadend = () => {
        if (reader2.result !== null && presignedUrl) {
          api.put(presignedUrl, reader2.result, {
            headers: {
              'Content-Type': file.type,
            },
          });
        }
      };
    }
  };

  useEffect(() => {
    getPresignedUrl();
  }, []);

  return (
    <S.Wrapper>
      {colorChart === BG_COLOR_CHART && (
        <>
          <S.Input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={imgRef}
          />

          <S.IconWrapper
            onClick={() => {
              handleIconFn();
              imgRef.current?.click();
            }}
            $isIconClicked={isIconClicked}
          >
            <IcCameraSmall />
          </S.IconWrapper>
        </>
      )}
      {colorChart.map((colorCode) => (
        <S.ColorWrapper key={colorCode}>
          <S.Color
            type="button"
            id={colorCode}
            variant={state === colorCode}
            $isIconClicked={
              colorChart === BG_COLOR_CHART ? isIconClicked : false
            }
            $colorCode={colorCode}
            onClick={handleFn}
          ></S.Color>
        </S.ColorWrapper>
      ))}
    </S.Wrapper>
  );
}

export default ShowColorChart;
