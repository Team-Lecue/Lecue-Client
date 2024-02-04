import { useEffect, useState } from 'react';

import useGetMyBookList from '../../hooks/useGetMyBookList';
import useGetNoteList from '../../hooks/useGetMyNoteList';
import {
  LecueBookProps,
  LecueBookType,
  LecueNoteType,
} from '../../types/myPageType';
import EmptyView from '../EmptyView';
import LecueBook from '../LecueBook';
import LecueNote from '../LecueNote';
import * as S from './LecueList.style';

function LecueList() {
  const [clickedBtn, setClickedBtn] = useState('note');
  const [counter, setCounter] = useState([0, 0]);

  const { myBookList } = useGetMyBookList();
  const { myNoteList } = useGetNoteList();

  const handleClickNoteBtn = () => {
    document.getElementById('list-wrapper')!.scrollTo(0, 0);
    setClickedBtn('note');
  };

  const handleClickBookBtn = () => {
    document.getElementById('list-wrapper')!.scrollTo(0, 0);
    setClickedBtn('book');
  };

  const numberCount = (NOTE: LecueNoteType[], BOOK: LecueBookType[]) => {
    setCounter([NOTE.length, BOOK.length]);
  };

  useEffect(() => {
    if (myNoteList && myBookList) {
      numberCount(myNoteList, myBookList);
    }
  }, [myNoteList, myBookList]);

  return (
    <S.Wrapper>
      <S.ButtonWrapper>
        <S.Button
          type="button"
          variant={clickedBtn === 'note'}
          onClick={handleClickNoteBtn}
        >
          레큐노트 ({counter[0]}개)
        </S.Button>
        <S.Button
          type="button"
          variant={clickedBtn === 'book'}
          onClick={handleClickBookBtn}
        >
          레큐북 ({counter[1]}개)
        </S.Button>
      </S.ButtonWrapper>

      <S.ListWrapper variant={clickedBtn} id="list-wrapper">
        <S.ListContainer variant={clickedBtn}>
          {clickedBtn === 'note' ? (
            myNoteList && myNoteList.length !== 0 ? (
              myNoteList.map((note: LecueNoteType) => {
                return (
                  <LecueNote
                    bookUuid={note.bookUuid}
                    key={note.noteId}
                    noteId={note.noteId}
                    favoriteName={note.favoriteName}
                    title={note.title}
                    noteDate={note.noteDate}
                    content={note.content}
                    noteTextColor={note.noteTextColor}
                    noteBackground={note.noteBackground}
                    noteList={myNoteList}
                  />
                );
              })
            ) : (
              <EmptyView clickedBtn={clickedBtn} />
            )
          ) : myBookList && myBookList.length !== 0 ? (
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
                />
              );
            })
          ) : (
            <EmptyView clickedBtn={clickedBtn} />
          )}
        </S.ListContainer>
      </S.ListWrapper>
    </S.Wrapper>
  );
}

export default LecueList;
