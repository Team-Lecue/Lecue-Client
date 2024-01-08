import { useState } from 'react';

import LecueNoteListHeader from '../LecueNoteLIstHeader';
import * as S from './LecueNoteListContainer.style';

interface LecueNoteListContainerProps {
  noteNum: number;
  backgroundColor: number;
}

function LecueNoteListContainer({
  noteNum,
  backgroundColor,
}: LecueNoteListContainerProps) {
  const [isZigZagView, setIsZigZagView] = useState<boolean>(true);

  return (
    <S.LecueNoteListContainerWrapper>
      <LecueNoteListHeader
        noteNum={noteNum}
        backgroundColor={backgroundColor}
        isZigZagView={isZigZagView}
        buttonOnClick={() => setIsZigZagView(!isZigZagView)}
      />
    </S.LecueNoteListContainerWrapper>
  );
}

export default LecueNoteListContainer;
