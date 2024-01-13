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

export interface postedStickerType {
  postedStickerId: number;
  stickerImage: string;
  positionX: number;
  positionY: number;
}

function LecueNoteListContainer({
  noteNum,
  backgroundColor,
  noteList,
}: LecueNoteListContainerProps) {
  const [isZigZagView, setIsZigZagView] = useState<boolean>(true);
  const [stickerState, setStickerState] = useState<postedStickerType>({
    postedStickerId: 0,
    stickerImage: '',
    positionX: 0,
    positionY: savedScrollPosition,
  });

  const { state } = location;
  useEffect(() => {
    if (state) {
      const { stickerId, stickerImage } = state.sticker;
      setStickerState((prev) => ({
        ...prev,
        postedStickerId: stickerId,
        stickerImage: stickerImage,
      }));
  }, [state]);

  const handleDrag = (e: DraggableEvent, ui: DraggableData) => {
    const { positionX, positionY } = stickerState;
    setStickerState((prev) => ({
      ...prev,
      positionX: positionX + ui.deltaX,
      positionY: positionY + ui.deltaY,
    }));
  };

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
            handleDrag={handleDrag}
            stickerState={stickerState}
          />
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
