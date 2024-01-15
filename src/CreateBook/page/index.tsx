import { useState } from 'react';

import Header from '../../components/common/Header';
import BookInfoTextarea from '../components/BookInfoTextarea';
import BookInput from '../components/BookInput';
import CompleteButton from '../components/CompleteButton';
import SelectColor from '../components/SelectColor';
import * as S from './CreateBook.style';

function CreateBook() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#191919');

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
            clickBackgroundColor={(backgroundColor: string) =>
              setBackgroundColor(backgroundColor)
            }
            backgroundColor={backgroundColor}
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
