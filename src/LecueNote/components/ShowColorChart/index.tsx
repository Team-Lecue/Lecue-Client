import { useRef } from 'react';

import { IcCameraSmall } from '../../../assets';
import { BG_COLOR_CHART } from '../../constants/colorChart';
import { ShowColorChartProps } from '../../type/lecueNoteType';
import * as S from './ShowColorChart.style';

function ShowColorChart({
  isIconClicked,
  colorChart,
  state,
  uploadImage,
  handleFn,
  handleIconFn,
}: ShowColorChartProps) {
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
