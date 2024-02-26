import { useRef } from 'react';

import { IcCameraSmall } from '../../../assets';
import { BG_COLOR_CHART } from '../../constants/colorChart';
import useGetPresignedUrl from '../../hooks/useGetPresignedUrl';
import { ShowColorChartProps } from '../../type/lecueNoteType';
import handleClickFiletoBinary from '../../util/handleClickFiletoBinary';
import handleClickFiletoString from '../../util/handleClickFiletoString';
import handleClickHeicToJpg from '../../util/handleClickHeicToJpg';
import * as S from './ShowColorChart.style';

function ShowColorChart({
  isIconClicked,
  colorChart,
  state,
  contents,
  handleTransformImgFile,
  presignedUrlDispatch,
  selectedFile,
  handleFn,
  handleIconFn,
  handleIsLoading,
}: ShowColorChartProps) {
  const imgRef = useRef<HTMLInputElement | null>(null);
  useGetPresignedUrl({ presignedUrlDispatch });

  const handleChangeContents = () => {
    sessionStorage.setItem('noteContents', contents ? contents : '');
  };

  const handleReaderOnloadend = (reader: FileReader, file: File) => {
    handleTransformImgFile(reader);
    selectedFile(file);
  };

  const handleImageUpload = () => {
    const fileInput = imgRef.current;

    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];

      if (file.name.split('.')[1].toUpperCase() === 'HEIC') {
        handleClickHeicToJpg({
          file: file,
          handleTransformImgFile,
          handleReaderOnloadend,
          handleIsLoading,
        });
      } else {
        const reader1 = new FileReader();
        handleClickFiletoString({
          file: file,
          reader: reader1,
          handleTransformImgFile,
        });

        const reader2 = new FileReader();
        handleClickFiletoBinary({
          file: file,
          reader: reader2,
          handleReaderOnloadend,
        });
      }
    }
  };

  return (
    <S.Wrapper>
      {colorChart === BG_COLOR_CHART && (
        <>
          <S.Input
            type="file"
            accept="image/*, image/heic"
            onChange={handleImageUpload}
            ref={imgRef}
          />

          <S.IconWrapper
            onClick={() => {
              handleIconFn();
              handleChangeContents();
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
            name={colorChart === BG_COLOR_CHART ? 'background' : 'textColor'}
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
