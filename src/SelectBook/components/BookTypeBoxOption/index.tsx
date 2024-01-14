import { IcCheck } from '../../../assets';
import * as S from './BookTypeBoxOption.style';

interface BookTypeBoxOptionProps {
  bookTypeBoxOption: string;
}

function BookTypeBoxOption({ bookTypeBoxOption }: BookTypeBoxOptionProps) {
  return (
    <S.BookTypeBoxOptionWrapper>
      <IcCheck />
      <S.BookTypeBoxOptionText>{bookTypeBoxOption}</S.BookTypeBoxOptionText>
    </S.BookTypeBoxOptionWrapper>
  );
}

export default BookTypeBoxOption;
