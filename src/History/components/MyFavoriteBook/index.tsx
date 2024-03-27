import { useNavigate } from 'react-router-dom';

import { IcHomeFavoriteFilled } from '../../../assets';
import useDeleteFavorite from '../../../libs/hooks/useDeleteFavorite';
import { FavoriteBookProps } from '../../types/historyType';
import * as S from './MyFavoriteBook.style';

function MyFavoriteBook(props: FavoriteBookProps) {
  const { bookId, bookUuid, favoriteImage, favoriteName } = props;

  const navigate = useNavigate();
  const deleteMutation = useDeleteFavorite('mypage');

  const handleClickFavoriteBtn = (bookId: number) => {
    deleteMutation.mutate(bookId);
  };

  const handleClickBook = (bookUuid: string) => {
    navigate(`/lecue-book/${bookUuid}`);
  };

  return (
    <S.MyFavoriteBookWrapper>
      <S.BookImage
        src={favoriteImage}
        alt="즐겨찾기-레큐북-이미지"
        onClick={() => handleClickBook(bookUuid)}
      />
      <S.FavoriteButton
        type="button"
        onClick={() => handleClickFavoriteBtn(bookId)}
      >
        <IcHomeFavoriteFilled />
      </S.FavoriteButton>

      <S.Title>{favoriteName}</S.Title>
    </S.MyFavoriteBookWrapper>
  );
}

export default MyFavoriteBook;
