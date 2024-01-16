import { forwardRef, useRef } from 'react';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';

import { NoteType, postedStickerType } from '../../type/lecueBookType';
import SmallLecueNote from '../SmallLecueNote';
import * as S from './ZigZagView.style';

interface ZigZagViewProps {
  noteList: NoteType[];
  handleDrag: (e: DraggableEvent, ui: DraggableData) => void;
  stickerState: postedStickerType;
  isEditable: boolean;
  postedStickerList: postedStickerType[];
  savedScrollPosition: number;
  fullHeight: number | null;
}

const ZigZagView = forwardRef(function ZigZagView(
  {
    noteList,
    handleDrag,
    stickerState,
    isEditable,
    postedStickerList,
    savedScrollPosition,
    fullHeight,
  }: ZigZagViewProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const nodeRef = useRef(null);

  return (
    <S.ZigZagViewWrapper ref={ref}>
      {noteList.map((note) => (
        <S.LecueNoteContainer key={note.noteId}>
          <SmallLecueNote {...note} noteList={noteList} />
        </S.LecueNoteContainer>
      ))}
      {/* <S.StickerContainer ref={ref}> */}
      {isEditable && (
        <Draggable
          defaultPosition={{
            x: 0,
            y: savedScrollPosition,
          }}
          onDrag={handleDrag}
          bounds="parent"
          nodeRef={nodeRef}
        >
          <S.Sticker
            ref={nodeRef}
            stickerImage={stickerState.stickerImage}
            isEditable
          />
        </Draggable>
      )}
          fullHeight !== null && (
                y: fullHeight - data.positionY,
    </S.ZigZagViewWrapper>
  );
});
export default ZigZagView;
