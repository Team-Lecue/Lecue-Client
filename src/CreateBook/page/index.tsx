import { useState } from 'react';

import Button from '../../components/common/Button';
import Header from '../../components/common/Header';
import {
  CATEGORY,
  TEXT_COLOR_CHART,
} from '../../LecueNote/constants/colorChart';
import BookInput from '../components/BookInput';
import SelectColor from '../components/SelectColor';
import * as S from './CreateBook.style';

function CreateBook() {
  const [isActive, setIsActive] = useState([false, false]);

  const [clickedCategory, setClickedCategory] = useState(CATEGORY[0]);
  const [clickedTextColor, setClickedTextColor] = useState(TEXT_COLOR_CHART[0]);

  const handleClickCategory = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setClickedCategory(e.currentTarget.innerHTML);
  };

  const handleClickedColorBtn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (clickedCategory === '텍스트색') {
      setClickedTextColor(e.currentTarget.id);
    } else {
      setClickedCategory(e.currentTarget.id);
    }
  };

  const handleClickConfirm = () => {
    alert('버튼 클릭');
  };

  const handleSetActive = (num: number, t: boolean) => {
    const updatedArray = [...isActive];
    updatedArray[num] = t;
    setIsActive(updatedArray);
  };

  return (
    <S.Wrapper>
      <Header headerTitle="레큐북 만들기" />
      <S.ContentWrapper>
        <BookInput
          handleSetActive={(num, t) => handleSetActive(num, t)}
          isTitle
        />
        <BookInput handleSetActive={(num, t) => handleSetActive(num, t)} />
        <SelectColor
          clickedTextColor={clickedTextColor}
          handleCategoryFn={handleClickCategory}
          handleColorFn={handleClickedColorBtn}
        />
        <Button
          variant="complete"
          disabled={!isActive}
          onClick={handleClickConfirm}
        >
          완료
        </Button>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}

export default CreateBook;
