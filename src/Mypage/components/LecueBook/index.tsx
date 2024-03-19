import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IcStar, IcStarDefault, IcWaste } from '../../../assets';
import CommonModal from '../../../components/common/Modal/CommonModal';
import useDeleteFavorite from '../../../libs/hooks/useDeleteFavorite';
import usePostFavorite from '../../../libs/hooks/usePostFavorite';
import useDeleteMyBook from '../../hooks/useDeleteMyBook';
import { LecueBookProps } from '../../types/myPageType';
import * as S from './LecueBook.style';

function LecueBook(props: LecueBookProps) {
  const {
    bookId,
    favoriteName,
    title,
    bookDate,
    noteNum,
    bookUuid,
    isFavorite,
  } = props;
  const [noteCount, setNoteCount] = useState('');
  const [modalOn, setModalOn] = useState(false);
  const [favorite, setFavorite] = useState(isFavorite);

  const navigate = useNavigate();

  const deleteMutation = useDeleteMyBook();
  const FavoritePostMutation = usePostFavorite();
  const FavoriteDeleteMutation = useDeleteFavorite();

  const convertNoteCount = (noteNum: number) => {
    setNoteCount(noteNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
  };

  const handleClickBook = (bookUuid: string) => {
    navigate(`/lecue-book/${bookUuid}`);
  };

  const handleClickTrashBtn = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setModalOn(true);
    event.stopPropagation();
  };

  const handleClickFavoriteBtn = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    bookId: number,
  ) => {
    event.stopPropagation();
    if (favorite) {
      FavoriteDeleteMutation.mutate(bookId);
      setFavorite(false);
    } else {
      FavoritePostMutation.mutate(bookId);
      setFavorite(true);
    }
  };

  const handleFn = () => {
    deleteMutation.mutate(bookId);
  };

  useEffect(() => {
    convertNoteCount(noteNum);
  }, [favorite]);

  return (
    <S.Wrapper>
      <S.BookWrapper
        onClick={() => {
          handleClickBook(bookUuid);
        }}
      >
        <S.Header>
          <S.Name>{favoriteName}</S.Name>
          <S.Favorite
            type="button"
            onClick={(event) => {
              handleClickFavoriteBtn(event, bookId);
            }}
          >
            {favorite ? <IcStar /> : <IcStarDefault />}
          </S.Favorite>
        </S.Header>
        <S.Title>{title}</S.Title>
        <S.Footer>
          <S.Date>{bookDate}</S.Date>
          <S.Count>{noteCount}개</S.Count>
        </S.Footer>
        <S.TrashBtn
          type="button"
          onClick={(event) => handleClickTrashBtn(event)}
        >
          <IcWaste />
        </S.TrashBtn>
      </S.BookWrapper>

      {modalOn && (
        <CommonModal
          category="book_delete"
          setModalOn={setModalOn}
          handleFn={handleFn}
        />
      )}
    </S.Wrapper>
  );
}

export default LecueBook;
