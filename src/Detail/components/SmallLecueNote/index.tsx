import React, { lazy, Suspense, useState } from 'react';

import animationData from '../../../assets/lottie/spiner 120.json';
import { NoteType } from '../../type/lecueBookType';
import * as S from './SmallLecueNote.style';

const LecueNoteModal = lazy(() => import('../LecueNoteModal'));
const Lottie = lazy(() => import('lottie-react'));

interface SmallLecueNoteProps {
  renderType: number;
  content: string;
  noteDate: string;
  noteNickname: string;
  noteTextColor: string;
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

  const getClickedNote = () =>
    noteList.filter((note) => note.noteId === noteId);

  const handleClickSmallLecueNote = () => {
    const clickedNote = getClickedNote();
    if (clickedNote) {
      setModalShow(true);
    }
  };

  return (
    <React.Fragment>
      {modalShow && (
        <Suspense fallback={<Lottie animationData={animationData} />}>
          <LecueNoteModal
            selectedNote={getClickedNote()[0]}
            closeModal={() => setModalShow(false)}
          />
        </Suspense>
      )}
      <S.SmallLecueNoteWrapper
        renderType={renderType}
        noteTextColor={noteTextColor}
        onClick={handleClickSmallLecueNote}
      >
        {noteBackground.substring(0, 1) === '#' ? (
          <S.SmallLecueNoteBackground noteBackground={noteBackground} />
        ) : (
          <S.SmallLecueNoteBackgroundImage
            src={noteBackground}
            loading="lazy"
          />
        )}
        <S.SmallLecueNoteNickName>{noteNickname}</S.SmallLecueNoteNickName>
        <S.SmallLecueNoteContentWrapper>
          <S.SmallLecueNoteContent>{content}</S.SmallLecueNoteContent>
        </S.SmallLecueNoteContentWrapper>
        <S.SmallLecueNoteDate>{noteDate}</S.SmallLecueNoteDate>
      </S.SmallLecueNoteWrapper>
    </React.Fragment>
  );
}

export default SmallLecueNote;
