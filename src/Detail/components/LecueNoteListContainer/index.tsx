import { useState } from 'react';

import LecueNoteListHeader from '../LecueNoteLIstHeader';
import ZigZagView from '../ZigZagView';
import * as S from './LecueNoteListContainer.style';

interface Note {
  noteId: number;
  renderType: number;
  content: string;
  noteDate: string;
  noteNickname: string;
  noteBackgroundColor: number;
}

interface LecueNoteListContainerProps {
  noteNum: number;
  backgroundColor: number;
  noteList: Note[];
}

function LecueNoteListContainer({
  noteNum,
  backgroundColor,
  noteList,
}: LecueNoteListContainerProps) {
  const [isZigZagView, setIsZigZagView] = useState<boolean>(true);

  return (
    <S.LecueNoteListContainerWrapper backgroundColor={backgroundColor}>
      <LecueNoteListHeader
        noteNum={noteNum}
        backgroundColor={backgroundColor}
        isZigZagView={isZigZagView}
        buttonOnClick={() => setIsZigZagView(!isZigZagView)}
      />
      {isZigZagView ? (
        <ZigZagView noteList={noteList} />
      ) : (
        <ZigZagView noteList={noteList} />
      )}
    </S.LecueNoteListContainerWrapper>
  );
}

export default LecueNoteListContainer;
