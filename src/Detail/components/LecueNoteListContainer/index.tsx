import { useState } from 'react';

import LecueNoteListHeader from '../LecueNoteLIstHeader';
import LinearView from '../LinearView';
import ZigZagView from '../ZigZagView';
import * as S from './LecueNoteListContainer.style';

interface Note {
  noteId: number;
  renderType: number;
  content: string;
  noteDate: string;
  noteNickname: string;
  noteTextColor: number;
  noteBackgroundColor: number;
  noteBackgroundImage: string;
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
      <S.LecueNoteListViewWrapper>
        {isZigZagView ? (
          <ZigZagView noteList={noteList} />
        ) : (
          <LinearView noteList={noteList} />
        )}
      </S.LecueNoteListViewWrapper>
        <S.ButtonWrapper>
          <Button variant="choose" onClick={handleClickDone}>
            부착 완료
          </Button>
        </S.ButtonWrapper>
    </S.LecueNoteListContainerWrapper>
  );
}

export default LecueNoteListContainer;
