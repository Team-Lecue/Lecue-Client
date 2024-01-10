import { useState } from 'react';
import { BG_COLOR_CHART, TEXT_COLOR_CHART } from '../../constants/ColorChart';
import ShowColorChart from '../ShowColorChart';
import * as S from './SelectColor.style';

function SelectColor() {
  const CATEGORY = ['텍스트색', '배경색'];
  const [clickedCategory, setclickedCategory] = useState('텍스트색');
  const [clickedTextColor, setClickedTextColor] = useState(TEXT_COLOR_CHART[0]);
  const [clickedBgColor, setclickedBgColor] = useState(BG_COLOR_CHART[0]);

  const handleClickCategory = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setclickedCategory(e.currentTarget.innerHTML);
  };

  const handleClickedColorBtn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    clickedCategory === '텍스트색'
      ? setClickedTextColor(e.currentTarget.id)
      : setclickedBgColor(e.currentTarget.id);
  };

  return (
    <S.Wrapper>
      <S.CategoryWrapper>
        {CATEGORY.map((it) => {
          return (
            <S.Category
              type="button"
              variant={clickedCategory === it}
              onClick={handleClickCategory}
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
          handleFn={handleClickedColorBtn}
        />
      ) : (
        <ShowColorChart
          colorChart={BG_COLOR_CHART}
          state={clickedBgColor}
          handleFn={handleClickedColorBtn}
        />
      )}
    </S.Wrapper>
  );
}

export default SelectColor;
