import useGetMyBookList from '../../hooks/useGetMyBookList';
import { LecueBookProps } from '../../types/historyType';
import HistoryEmptyView from '../HistoryEmptyView';
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
        <HistoryEmptyView
          topLineText={'아직 내가 만든 레큐북이 없어요'}
          bottomLineText={'새로 만들어볼까요?'}
        />
      )}
    </S.Wrapper>
  );
}

export default MyLecueBookList;
