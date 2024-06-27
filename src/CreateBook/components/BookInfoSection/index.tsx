import React from 'react';

import { BookInfoSectionProps } from '../../type/createBookType';
import BookInfoTextarea from '../BookInfoTextarea';
import * as S from './BookInfoSection.style';

function BookInfoSection({
  backgroundColor,
  description,
  changeDescription,
}: BookInfoSectionProps) {
  return (
    <S.BookInfoTextareaWrapper>
      <S.SectionTitle variant={backgroundColor === '#191919'}>
        레큐북 소개
      </S.SectionTitle>
      <BookInfoTextarea
        description={description}
        changeDescription={changeDescription}
      />
    </S.BookInfoTextareaWrapper>
  );
}

export default React.memo(BookInfoSection);
