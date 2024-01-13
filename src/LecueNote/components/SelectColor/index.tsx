import {
  BG_COLOR_CHART,
  CATEGORY,
  TEXT_COLOR_CHART,
} from '../../constants/colorChart';
import { SelectColorProps } from '../../type/lecueNoteType';
import ShowColorChart from '../ShowColorChart';
import * as S from './SelectColor.style';

function SelectColor({
  clickedCategory,
  clickedTextColor,
  clickedBgColor,
  handleCategoryFn,
  handleColorFn,
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
          colorChart={TEXT_COLOR_CHART}
          state={clickedTextColor}
          handleFn={handleColorFn}
        />
      ) : (
        <ShowColorChart
          colorChart={BG_COLOR_CHART}
          state={clickedBgColor}
          handleFn={handleColorFn}
        />
      )}
    </S.Wrapper>
  );
}

export default SelectColor;
