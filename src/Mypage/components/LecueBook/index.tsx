import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IcWaste } from '../../../assets';
import CommonModal from '../../../components/common/Modal/CommonModal';
import useDeleteMyBook from '../../hooks/useDeleteMyBook';
import { LecueBookProps } from '../../types/myPageType';
import * as S from './LecueBook.style';

function LecueBook(props: LecueBookProps) {
  const { bookId, favoriteName, title, bookDate, noteNum, bookUuid } = props;

  const [noteCount, setNoteCount] = useState('');
  const [modalOn, setModalOn] = useState(false);
  const navigate = useNavigate();
  const deleteMyBookMutation = useDeleteMyBook();

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
    // deleteMyBookMutation.mutate(bookId);
    setModalOn(true);
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

      {modalOn && (
        <CommonModal category="book_delete" setModalOn={setModalOn} />
      )}
    </S.Wrapper>
  );
}

export default LecueBook;
