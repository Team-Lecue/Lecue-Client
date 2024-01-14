import { ReactNode } from 'react';

import BookTypeBoxOption from '../BookTypeBoxOption';
import * as S from './BookTypeBox.style';

interface BookTypeBoxProps {
  onClick: () => void;
  selectedBox: number;
  bookType: number;
  bookTypeBoxTitle: string;
  bookTypeBoxImg: ReactNode;
  bookTypeBoxPrice: number;
  isClickedSelectButton: boolean;
  bookTypeBoxOptionList: string[];
}

function BookTypeBox({
  onClick,
  bookType,
  bookTypeBoxTitle,
  bookTypeBoxImg,
  bookTypeBoxPrice,
  selectedBox,
  isClickedSelectButton,
  bookTypeBoxOptionList,
}: BookTypeBoxProps) {
  return (
    <S.BookTypeBoxWrapper
      onClick={() => {
        if (isClickedSelectButton === false) {
          onClick();
        }
      }}
      bookType={bookType}
      selectedBox={selectedBox}
      isClickedSelectButton={isClickedSelectButton}
    >
      <S.BookTypeBoxTitle bookType={bookType} selectedBox={selectedBox}>
        {bookTypeBoxTitle}
      </S.BookTypeBoxTitle>
      {bookTypeBoxImg}
      <S.BookTypeBoxPriceWrapper>
        <S.BookTypeBoxPrice bookType={bookType} selectedBox={selectedBox}>
          {bookTypeBoxPrice}원
        </S.BookTypeBoxPrice>
        {bookType == 2 ? <S.OneBookText>/1권</S.OneBookText> : <></>}
      </S.BookTypeBoxPriceWrapper>
      <S.BookTypeBoxOptionList bookType={bookType} selectedBox={selectedBox}>
        {bookTypeBoxOptionList.map((option, idx) => (
          <BookTypeBoxOption key={idx + option} bookTypeBoxOption={option} />
        ))}
      </S.BookTypeBoxOptionList>
    </S.BookTypeBoxWrapper>
  );
}

export default BookTypeBox;
