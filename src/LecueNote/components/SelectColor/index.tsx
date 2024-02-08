import {
  BG_COLOR_CHART,
  CATEGORY,
  TEXT_COLOR_CHART,
} from '../../constants/colorChart';
import { SelectColorProps } from '../../type/lecueNoteType';
import ShowColorChart from '../ShowColorChart';
import * as S from './SelectColor.style';

function SelectColor({
  clickedData,
  isIconClicked,
  handleTrainsitImgFile,
  setPresignedUrl,
  setFileName,
  handleCategoryFn,
  handleColorFn,
  handleIconFn,
  selectedFile,
}: SelectColorProps) {
  const { textColor, background, category } = clickedData;

  return (
    <S.Wrapper>
      <S.CategoryWrapper>
        {CATEGORY.map((it) => {
          return (
            <S.Category
              key={it}
              type="button"
              name="category"
              variant={category === it}
              onClick={handleCategoryFn}
            >
              {it}
            </S.Category>
          );
        })}
      </S.CategoryWrapper>

      {category === '텍스트색' ? (
        <ShowColorChart
          isIconClicked={isIconClicked}
          colorChart={TEXT_COLOR_CHART}
          state={textColor}
          handleTrainsitImgFile={handleTrainsitImgFile}
          selectedFile={selectedFile}
          setPresignedUrl={setPresignedUrl}
          setFileName={setFileName}
          handleFn={handleColorFn}
          handleIconFn={handleIconFn}
        />
      ) : (
        <ShowColorChart
          isIconClicked={isIconClicked}
          colorChart={BG_COLOR_CHART}
          state={background}
          handleTrainsitImgFile={handleTrainsitImgFile}
          selectedFile={selectedFile}
          setPresignedUrl={setPresignedUrl}
          setFileName={setFileName}
          handleFn={handleColorFn}
          handleIconFn={handleIconFn}
        />
      )}
    </S.Wrapper>
  );
}

export default SelectColor;
