import useGetMyFavorite from '../../hooks/useGetMyFavorite';
import { FavoriteBookProps } from '../../types/historyType';
import MyFavoriteBook from '../MyFavoriteBook';
import * as S from './MyFavoriteBookList.style';

function MyFavoriteBookList() {
  const { myFavoriteList } = useGetMyFavorite();

  return (
    <S.MyFavoriteBookListWrapper>
      {myFavoriteList && myFavoriteList.length !== 0 ? (
        myFavoriteList.map((book: FavoriteBookProps) => {
          return (
            <MyFavoriteBook
              key={book.bookId}
              bookId={book.bookId}
              bookUuid={book.bookUuid}
              favoriteImage={book.favoriteImage}
              favoriteName={book.favoriteName}
            />
          );
        })
      ) : (
        <div>0개입니당 ㅋㅋ</div>
      )}
    </S.MyFavoriteBookListWrapper>
  );
}

export default MyFavoriteBookList;
