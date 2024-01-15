import { useState } from 'react';

import Header from '../../components/common/Header';
import {
  CATEGORY,
  TEXT_COLOR_CHART,
} from '../../LecueNote/constants/colorChart';
import BookInfoTextarea from '../components/BookInfoTextarea';
import BookInput from '../components/BookInput';
import CompleteButton from '../components/CompleteButton';
import SelectColor from '../components/SelectColor';
import * as S from './CreateBook.style';

function CreateBook() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

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

  // const handleSetActive = (num: number, t: boolean) => {
  //   const updatedArray = [...isActive];
  //   updatedArray[num] = t;
  //   setIsActive(updatedArray);
  // };

  const handleClickCompleteButton = () => {};

  return (
    <S.CreateBookWrapper>
      <Header headerTitle="레큐북 만들기" />
      <S.CreateBookBodyWrapper>
        <S.InputWrapper>
          <S.BookInputWrapper>
            <S.SectionTitle>레큐북 제목</S.SectionTitle>
            <BookInput title={title} changeTitle={(title) => setTitle(title)} />
          </S.BookInputWrapper>
          <S.BookInfoTextareaWrapper>
            <S.SectionTitle>레큐북 소개</S.SectionTitle>
            <BookInfoTextarea
              description={description}
              changeDescription={(description) => setDescription(description)}
            />
          </S.BookInfoTextareaWrapper>
          <SelectColor
            clickedTextColor={clickedTextColor}
            handleCategoryFn={handleClickCategory}
            handleColorFn={handleClickedColorBtn}
          />
        </S.InputWrapper>
        <CompleteButton
          isActive={title.length !== 0 && description.length !== 0}
          onClick={handleClickCompleteButton}
        />
      </S.CreateBookBodyWrapper>
    </S.CreateBookWrapper>
  );
}

export default CreateBook;
