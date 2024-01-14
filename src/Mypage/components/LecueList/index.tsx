import { useEffect, useState } from 'react';

import { BOOK_LIST, NOTE_LIST } from '../../constants/DATA';
import { LecueBookType, LecueNoteType } from '../../types/myPageType';
import LecueBook from '../LecueBook';
import LecueNote from '../LecueNote';
import * as S from './LecueList.style';

function LecueList() {
  const [clickedBtn, setClickedBtn] = useState(true);
  const [counter, setCounter] = useState([0, 0]);

  const handleClickNoteBtn = () => {
    window.scrollTo(0, 0);
    setClickedBtn(true);
  };

  const handleClickBookBtn = () => {
    window.scrollTo(0, 0);
    setClickedBtn(false);
  };

  const numberCount = (NOTE: LecueNoteType[], BOOK: LecueBookType[]) => {
    setCounter([NOTE.length, BOOK.length]);
  };

  useEffect(() => {
    numberCount(NOTE_LIST, BOOK_LIST);
  }, []);

  return (
    <S.Wrapper>
      <S.ButtonWrapper>
        {/* clickedBtn이 true이면 note false이면 book */}
        <S.Button
          type="button"
          clickedBtn={clickedBtn}
          onClick={handleClickNoteBtn}
        >
          레큐노트 ({counter[0]}개)
        </S.Button>
        <S.Button
          type="button"
          clickedBtn={!clickedBtn}
          onClick={handleClickBookBtn}
        >
          레큐북 ({counter[1]}개)
        </S.Button>
      </S.ButtonWrapper>

      <S.ListWrapper clickedBtn={clickedBtn}>
        {clickedBtn
          ? NOTE_LIST.map((note) => {
              return (
                <LecueNote
                  key={note.noteId}
                  favoriteName={note.favoriteName}
                  title={note.title}
                  noteDate={note.noteDate}
                  content={note.content}
                />
              );
            })
          : BOOK_LIST.map((book) => {
              return (
                <LecueBook
                  key={book.bookId}
                  favoriteName={book.favoriteName}
                  title={book.title}
                  bookDate={book.bookDate}
                  noteNum={book.noteNum}
                />
              );
            })}
      </S.ListWrapper>
    </S.Wrapper>
  );
}

export default LecueList;
