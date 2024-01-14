import {
  BG_COLOR_CHART,
  CATEGORY,
  TEXT_COLOR_CHART,
} from '../../constants/colorChart';
import { SelectColorProps } from '../../type/lecueNoteType';
import ShowColorChart from '../ShowColorChart';
import * as S from './SelectColor.style';

function SelectColor({
  isIconClicked,
  clickedCategory,
  clickedTextColor,
  clickedBgColor,
  handleCategoryFn,
  handleColorFn,
  handleIconFn,
  uploadImage,
}: SelectColorProps) {
  return (
    <S.Wrapper>
      <S.CategoryWrapper>
        {CATEGORY.map((it) => {
          return (
            <S.Category
              key={it}
              type="button"
              variant={clickedCategory === it}
              onClick={handleCategoryFn}
            >
              {it}
            </S.Category>
          );
        })}
      </S.CategoryWrapper>

      {clickedCategory === '텍스트색' ? (
        <ShowColorChart
          isIconClicked={isIconClicked}
          colorChart={TEXT_COLOR_CHART}
          state={clickedTextColor}
          uploadImage={uploadImage}
          handleFn={handleColorFn}
          handleIconFn={handleIconFn}
        />
      ) : (
        <ShowColorChart
          isIconClicked={isIconClicked}
          colorChart={BG_COLOR_CHART}
          state={clickedBgColor}
          uploadImage={uploadImage}
          handleFn={handleColorFn}
          handleIconFn={handleIconFn}
        />
      )}
    </S.Wrapper>
  );
}

export default SelectColor;
