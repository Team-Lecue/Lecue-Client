import { useEffect, useState } from 'react';

import { LecueNoteProps } from '../../types/myPageType';
import NoteModal from '../NoteModal';
import * as S from './LecueNote.style';

function LecueNote(props: LecueNoteProps) {
  const {
    noteId,
    favoriteName,
    title,
    noteDate,
    content,
    noteTextColor,
    noteBackground,
    noteList,
    bookUuid,
  } = props;

  const [isModalShow, setIsModalShow] = useState(false);
  const [clickedCloseBtn, setClickedCloseBtn] = useState(false);

  const handleCloseBtn = () => {
    setClickedCloseBtn(true);
  };

  const getClickedNote = () => {
    return noteList.filter((note) => note.noteId === noteId);
  };

  const handleClickNote = () => {
    const clickedNote = getClickedNote();
    if (clickedNote) {
      setIsModalShow(true);
    }
  };

  useEffect(() => {
    if (clickedCloseBtn) {
      setIsModalShow(false);
      setClickedCloseBtn(false);
    }
  }, [clickedCloseBtn]);

  return (
    <S.Wrapper
      noteBackground={noteBackground}
      onClick={() => {
        handleClickNote();
      }}
    >
      <S.TextWrapper noteTextColor={noteTextColor}>
        <S.Name>{favoriteName}</S.Name>
        <S.Title>{title}</S.Title>
        <S.Content>{content}</S.Content>
      </S.TextWrapper>
      <S.Date>{noteDate}</S.Date>

      {isModalShow && (
        <NoteModal
          bookUuid={bookUuid}
          selectedNote={getClickedNote()[0]}
          handleCloseBtn={handleCloseBtn}
        />
      )}
    </S.Wrapper>
  );
}

export default LecueNote;
