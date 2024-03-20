import useGetMyBookList from '../../hooks/useGetMyBookList';
import { LecueBookProps } from '../../types/myPageType';
import LecueBook from '../LecueBook';
import * as S from './LecueBookList.style';

function MyLecueBook() {
  const { myBookList } = useGetMyBookList();

  return (
    <S.Wrapper>
      {myBookList && myBookList.length !== 0 ? (
        myBookList.map((book: LecueBookProps) => {
          return (
            <LecueBook
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

export default MyLecueBook;
