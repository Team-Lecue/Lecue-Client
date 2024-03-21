import { LecueBookProps } from '../../../Mypage/types/myPageType';
import useGetMyBookList from '../../hooks/useGetMyBookList';
import MyLecueBook from '../MyLecueBook';
import * as S from './MyLecueBookList.style';

function MyLecueBookList() {
  const { myBookList } = useGetMyBookList();

  return (
    <S.Wrapper>
      {myBookList && myBookList.length !== 0 ? (
        myBookList.map((book: LecueBookProps) => {
          return (
            <MyLecueBook
              key={book.bookId}
              bookUuid={book.bookUuid}
              bookId={book.bookId}
              favoriteName={book.favoriteName}
              title={book.title}
              bookDate={book.bookDate}
              noteNum={book.noteNum}
              isFavorite={book.isFavorite}
            />
          );
        })
      ) : (
        <div>레큐북 0개....~</div>
      )}
    </S.Wrapper>
  );
}

export default MyLecueBookList;
