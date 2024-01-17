import { useState } from 'react';

import { NoteType } from '../../type/lecueBookType';
import LecueNoteModal from '../LecueNoteModal';
import * as S from './SmallLecueNote.style';

interface SmallLecueNoteProps {
  renderType: number;
  content: string;
  noteDate: string;
  noteNickname: string;
  noteTextColor: number;
  noteBackground: string;
  noteId: number;
  noteList: NoteType[];
}

function SmallLecueNote({
  renderType,
  content,
  noteDate,
  noteNickname,
  noteTextColor,
  noteBackground,
  noteId,
  noteList,
}: SmallLecueNoteProps) {
  const [modalShow, setModalShow] = useState(false);

  const getClickedNote = () => noteList.find((note) => note.noteId === noteId);

  const handleClickSmallLecueNote = () => {
    const clickedNote = getClickedNote();
    if (clickedNote) {
      setModalShow(true);
    }
  };

  return (
    <S.SmallLecueNoteWrapper
      renderType={renderType}
      noteTextColor={noteTextColor}
      noteBackground={noteBackground}
      onClick={handleClickSmallLecueNote}
    >
      <S.SmallLecueNoteNickName>{noteNickname}</S.SmallLecueNoteNickName>
      <S.SmallLecueNoteContentWrapper>
        <S.SmallLecueNoteContent>{content}</S.SmallLecueNoteContent>
      </S.SmallLecueNoteContentWrapper>
      <S.SmallLecueNoteDate>{noteDate}</S.SmallLecueNoteDate>
      {modalShow && (
        <LecueNoteModal
          selectedNote={getClickedNote()}
          closeModal={() => setModalShow(false)}
        />
      )}
    </S.SmallLecueNoteWrapper>
  );
}

export default SmallLecueNote;
