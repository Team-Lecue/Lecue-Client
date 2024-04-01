import LecueBook from '../../../components/common/LecueBook';
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
  const isBookmark = title.includes('즐겨찾기');
  const { data } = isBookmark ? useGetFavorite() : useGetLecueBook();

  return (
    <S.LecueBookListWrapper>
      <S.Title>{title}</S.Title>
      {data && data.length !== 0 ? (
        <S.LecueBookList>
          {data.map((book: BookProps) => (
            <S.LecueBook key={book.bookId} id={`${book.bookId}`}>
              {isBookmark ? (
                <LecueBook
                  bookId={book.bookId}
                  bookUuid={book.bookUuid}
                  favoriteImage={book.favoriteImage}
                  favoriteName={book.favoriteName}
                  bookType="favorite"
                  deleteType="home"
                />
              ) : (
                <LecueBook
                  bookId={book.bookId}
                  bookUuid={book.bookUuid}
                  favoriteImage={book.favoriteImage}
                  favoriteName={book.favoriteName}
                  bookType="normal"
                />
              )}
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
