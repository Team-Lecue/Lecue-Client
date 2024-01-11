import { useState } from 'react';

import LecueNoteModal from '../LecueNoteModal';
import * as S from './SmallLecueNote.style';

interface Note {
  noteId: number;
  renderType: number;
  content: string;
  noteDate: string;
  noteNickname: string;
  noteBackgroundColor: number;
}

interface SmallLecueNoteProps {
  renderType: number;
  content: string;
  noteDate: string;
  noteNickname: string;
  noteBackgroundColor: number;
  noteId: number;
  noteList: Note[];
}

function SmallLecueNote({
  renderType,
  content,
  noteDate,
  noteNickname,
  noteBackgroundColor,
  noteId,
  noteList,
}: SmallLecueNoteProps) {
  const [modalShow, setModalShow] = useState(false);

  const getClickedNote = () => noteList.find((note) => note.noteId === noteId);

  const handleClick = () => {
    const clickedNote = getClickedNote();
    if (clickedNote) {
      setModalShow((prevModalShow) => !prevModalShow);
    }
  };

  return (
    <S.SmallLecueNoteWrapper
      renderType={renderType}
      noteBackgroundColor={noteBackgroundColor}
      onClick={handleClick}
    >
      <S.SmallLecueNoteNickName>{noteNickname}</S.SmallLecueNoteNickName>
      <S.SmallLecueNoteContentWrapper>
        <S.SmallLecueNoteContent>{content}</S.SmallLecueNoteContent>
      </S.SmallLecueNoteContentWrapper>
      <S.SmallLecueNoteDate>{noteDate}</S.SmallLecueNoteDate>
      {modalShow && <LecueNoteModal selectedNote={getClickedNote() || null} />}
    </S.SmallLecueNoteWrapper>
  );
}

export default SmallLecueNote;
