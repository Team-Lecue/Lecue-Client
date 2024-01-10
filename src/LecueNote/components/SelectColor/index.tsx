import { useState } from 'react';
import * as S from './SelectColor.style';
import TextColor from '../TextColor';
import BgColor from '../BgColor';

function SelectColor() {
  const [isClicked, setIsClicked] = useState('텍스트색');

  const handleClickCategory = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setIsClicked(e.currentTarget.innerHTML);
  };

  return (
    <S.Wrapper>
      <S.CategoryWrapper>
        <S.Category
          type="button"
          variant={isClicked === '텍스트색'}
          onClick={handleClickCategory}
        >
          텍스트색
        </S.Category>
        <S.Category
          type="button"
          variant={isClicked === '배경색'}
          onClick={handleClickCategory}
        >
          배경색
        </S.Category>
      </S.CategoryWrapper>

      {isClicked === '텍스트색' ? <TextColor /> : <BgColor />}
    </S.Wrapper>
  );
}

export default SelectColor;
