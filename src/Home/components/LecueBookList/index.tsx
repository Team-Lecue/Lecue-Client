import { useNavigate } from 'react-router';

import { IcHomeFavorite } from '../../../assets';
import useDeleteFavorite from '../../../libs/hooks/useDeleteFavorite';
import useGetFavorite from '../../../libs/hooks/useGetFavorite';
import useGetLecueBook from '../../hooks/useGetLecueBook';
import NoBookmarkList from '../NoBookmarkList';
import * as S from './LecueBookList.style';

interface BookProps {
  bookId: number;
  bookUuid: string;
  favoriteImage: string;
  favoriteName: string;
}

interface LecueBookListProps {
  title: string;
}

function LecueBookList({ title }: LecueBookListProps) {
  const navigate = useNavigate();
  const deleteMutation = useDeleteFavorite();
  const isBookmark = title.includes('즐겨찾기');
  const { data } = isBookmark ? useGetFavorite() : useGetLecueBook();

  const handleClickLecueBook = (uuid: string) => {
    navigate(`/lecue-book/${uuid}`);
  };

  const handleClickFavoriteIcon = (bookId: number) => {
    deleteMutation.mutate(bookId);
  };

  return (
    <S.LecueBookListWrapper>
      <S.Title>{title}</S.Title>
      {data && data.length !== 0 ? (
        <S.LecueBookList>
          {data.map((book: BookProps) => (
            <S.LecueBook key={book.bookId} id={`${book.bookId}`}>
              {isBookmark && (
                <S.IconWrapper
                  onClick={() => handleClickFavoriteIcon(book.bookId)}
                >
                  <IcHomeFavorite />
                </S.IconWrapper>
              )}

              <S.BookImage
                src={book.favoriteImage}
                alt="레큐북-이미지"
                onClick={() => handleClickLecueBook(book.bookUuid)}
              />
              <S.BookTitle>{book.favoriteName}</S.BookTitle>
            </S.LecueBook>
          ))}
        </S.LecueBookList>
      ) : (
        <NoBookmarkList />
      )}
    </S.LecueBookListWrapper>
  );
}

export default LecueBookList;
