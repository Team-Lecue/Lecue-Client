import { useEffect, useRef, useState } from 'react';

import { IcCameraSmall } from '../../../assets';
import getPresignedUrl from '../../api/getPresignedUrl';
import handleImageUpload from '../../api/handleImageUpload';
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

  useEffect(() => {
    getPresignedUrl({
      setPresignedUrl: setPresignedUrl,
      setFileName: setFileName,
    });
  }, []);

  return (
    <S.Wrapper>
      {colorChart === BG_COLOR_CHART && (
        <>
          <S.Input
            type="file"
            accept="image/*"
            onChange={() =>
              handleImageUpload(imgRef, uploadImage, presignedUrl)
            }
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
