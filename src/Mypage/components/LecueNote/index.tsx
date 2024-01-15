import { useState } from 'react';

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
    noteBackgroundColor,
    noteBackgroundImage,
    noteList,
  } = props;

  const [isModalShow, setIsModalShow] = useState(false);

  const getClickedNote = () => noteList.find((note) => note.noteId === noteId);

  const handleClickNote = () => {
    const clickedNote = getClickedNote();
    if (clickedNote) {
      setIsModalShow((prev) => !prev);
    }
  };

  return (
    <S.Wrapper
      noteBackgroundColor={noteBackgroundColor}
      noteBackgroundImage={noteBackgroundImage}
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
      {isModalShow ? (
        <NoteModal selectedNote={getClickedNote() || null} />
      ) : null}
    </S.Wrapper>
  );
}

export default LecueNote;
