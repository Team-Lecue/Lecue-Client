import React from 'react';

import ShowColorChart from '../ShowColorChart';
import * as S from './SelectColor.style';

interface SelectColorProps {
  backgroundColor: string;
  clickBackgroundColor: (backgroundColor: string) => void;
}

function SelectColor({
  backgroundColor,
  clickBackgroundColor,
}: SelectColorProps) {
  return (
    <S.Wrapper>
      <S.Category variant={backgroundColor === '#191919'}>
        레큐북 배경색
      </S.Category>
      <ShowColorChart
        backgroundColor={backgroundColor}
        handleFn={(backgroundColor: string) =>
          clickBackgroundColor(backgroundColor)
        }
      />
    </S.Wrapper>
  );
}

export default React.memo(SelectColor);
