import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IcWaste } from '../../../assets';
import { LecueBookProps } from '../../types/myPageType';
import * as S from './LecueBook.style';

function LecueBook(props: LecueBookProps) {
  const { bookId, favoriteName, title, bookDate, noteNum, bookUuid } = props;

  const [noteCount, setNoteCount] = useState('');
  const navigate = useNavigate();

  const convertNoteCount = (noteNum: number) => {
    setNoteCount(noteNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
  };

  const handleClickBook = (bookUuid: string) => {
    navigate(`lecue-book/${bookUuid}`);
  };

  const handleClickTrashBtn = (
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
        handleClickBook(bookUuid);
      }}
    >
      <S.Header>
        <S.Name>{favoriteName}</S.Name>
        <S.TrashBtn onClick={(event) => handleClickTrashBtn(event, bookId)}>
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
