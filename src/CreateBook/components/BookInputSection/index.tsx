import React from 'react';

import { BookInputSectionProps } from '../../type/createBookType';
import BookInput from '../BookInput';
import * as S from './BookInputSection.style';

function BookInputSection({
  backgroundColor,
  title,
  changeTitle,
}: BookInputSectionProps) {
  return (
    <S.BookInputSectionWrapper>
      <S.SectionTitle variant={backgroundColor === '#191919'}>
        레큐북 제목
      </S.SectionTitle>
      <BookInput title={title} changeTitle={changeTitle} />
    </S.BookInputSectionWrapper>
  );
}

export default React.memo(BookInputSection);
