import * as S from '../ColorChart.style';
import { BG_COLOR_CHART } from '../../constants/ColorChart';
import { useState } from 'react';

function BgColor() {
  const [clickedBgColor, setclickedBgColor] = useState(BG_COLOR_CHART[0]);

  const handleClickedColorBtn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setclickedBgColor(e.currentTarget.id);
  };

  return (
    <S.Wrapper>
      {BG_COLOR_CHART.map((colorCode) => (
        <S.ColorWrapper>
          <S.Color
            type="button"
            id={colorCode}
            variant={clickedBgColor === colorCode}
            $colorCode={colorCode}
            onClick={handleClickedColorBtn}
          ></S.Color>
        </S.ColorWrapper>
      ))}
    </S.Wrapper>
  );
}

export default BgColor;
