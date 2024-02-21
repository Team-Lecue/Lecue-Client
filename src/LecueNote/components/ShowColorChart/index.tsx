import heic2any from 'heic2any';
import { useRef } from 'react';

import { IcCameraSmall } from '../../../assets';
import { BG_COLOR_CHART } from '../../constants/colorChart';
import useGetPresignedUrl from '../../hooks/useGetPresignedUrl';
import { ShowColorChartProps } from '../../type/lecueNoteType';
import handleClickFiletoBinary from '../../util/handleClickFiletoBinary';
import handleClickFiletoString from '../../util/handleClickFiletoString';
import * as S from './ShowColorChart.style';

function ShowColorChart({
  isIconClicked,
  colorChart,
  state,
  handleTransformImgFile,
  presignedUrlDispatch,
  selectedFile,
  handleFn,
  handleIconFn,
}: ShowColorChartProps) {
  const imgRef = useRef<HTMLInputElement | null>(null);
  useGetPresignedUrl({ presignedUrlDispatch });

  const handleReaderOnloadend = (reader: FileReader, file: File) => {
    handleTransformImgFile(reader);
    selectedFile(file);
  };

  const handleImageUpload = () => {
    const fileInput = imgRef.current;

    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];

      if (
        file.name.split('.')[1] === 'heic' ||
        file.name.split('.')[1] === 'HEIC'
      ) {
        // 'heic' 확장자인 경우에만 처리
        heic2any({ blob: file, toType: 'image/jpeg' }).then(
          function (resultBlob) {
            // 변환된 Blob을 사용하여 새로운 File 생성
            const jpg = new File(
              Array.isArray(resultBlob) ? resultBlob : [resultBlob],
              file.name.split('.')[0] + '.jpg',
              { type: 'image/jpeg', lastModified: new Date().getTime() },
            );

            // reader1: 파일을 base64로 읽어서 업로드
            const reader1 = new FileReader();
            handleClickFiletoString({
              file: jpg,
              reader: reader1,
              handleTransformImgFile,
            });

            // reader2: 파일을 ArrayBuffer로 읽어서 PUT 요청 수행
            const reader2 = new FileReader();
            handleClickFiletoBinary({
              file: jpg,
              reader: reader2,
              handleReaderOnloadend,
            });
          },
        );
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
