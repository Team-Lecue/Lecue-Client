import { useState } from 'react';
import { TEXT_COLOR_CHART } from '../../constants/ColorChart';
import * as S from './TextColor.style';

function TextColor() {
  const [clickedTextColor, setClickedTextColor] = useState(TEXT_COLOR_CHART[0]);

  const handleClickedColorBtn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setClickedTextColor(e.currentTarget.id);
  };

  return (
    <S.Wrapper>
      {TEXT_COLOR_CHART.map((colorCode) => (
        <S.ColorWrapper>
          <S.Color
            type="button"
            id={colorCode}
            variant={clickedTextColor === colorCode}
            $colorCode={colorCode}
            onClick={handleClickedColorBtn}
          ></S.Color>
        </S.ColorWrapper>
      ))}
    </S.Wrapper>
  );
}

export default TextColor;
