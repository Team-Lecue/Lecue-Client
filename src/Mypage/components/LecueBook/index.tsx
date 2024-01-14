import { useEffect, useState } from 'react';

import { IcWaste } from '../../../assets';
import { LecueBookProps } from '../../types/myPageType';
import * as S from './LecueBook.style';

function LecueBook(props: LecueBookProps) {
  const { bookId, favoriteName, title, bookDate, noteNum } = props;

  const [noteCount, setNoteCount] = useState('');

  const convertNoteCount = (noteNum: number) => {
    setNoteCount(noteNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
  };

  const handleClickBook = (bookId: number) => {
    alert(`${bookId}가 선택되었습니다.`);
  };

  const handleClickDelete = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    bookId: number,
  ) => {
    event.stopPropagation();
    alert(`${bookId}를 삭제하시겠습니까?`);
  };

  useEffect(() => {
    convertNoteCount(noteNum);
  });

  return (
    <S.Wrapper
      onClick={() => {
        handleClickBook(bookId);
      }}
    >
      <S.Header>
        <S.Name>{favoriteName}</S.Name>
        <S.TrashBtn onClick={(event) => handleClickDelete(event, bookId)}>
          <IcWaste />
        </S.TrashBtn>
      </S.Header>
      <S.Title>{title}</S.Title>
      <S.Footer>
        <S.Date>{bookDate}</S.Date>
        <S.Count>{noteCount}개</S.Count>
      </S.Footer>
    </S.Wrapper>
  );
}

export default LecueBook;
