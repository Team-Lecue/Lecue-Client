import * as S from './BookTypeBox.style';

interface BookTypeBoxProps {
  onClick: () => void;
  selectedBox: number;
  bookType: number;
  isClickedSelectButton: boolean;
}

function BookTypeBox({
  onClick,
  bookType,
  selectedBox,
  isClickedSelectButton,
}: BookTypeBoxProps) {
  return (
    <S.BookTypeBoxWrapper
      onClick={() => {
        onClick();
      }}
      bookType={bookType}
      selectedBox={selectedBox}
      isClickedSelectButton={isClickedSelectButton}
    >
      {bookType}
    </S.BookTypeBoxWrapper>
  );
}

export default BookTypeBox;
