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
}

const ZigZagView = forwardRef(function ZigZagView(
  {
    noteList,
    handleDrag,
    stickerState,
    isEditable,
    postedStickerList,
    savedScrollPosition,
  }: ZigZagViewProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const nodeRef = useRef(null);

  return (
    <S.ZigZagViewWrapper>
      {noteList.map((note) => (
        <S.LecueNoteContainer key={note.noteId}>
          <SmallLecueNote {...note} noteList={noteList} />
        </S.LecueNoteContainer>
      ))}
      <S.StickerContainer ref={ref}>
        {postedStickerList.map((data) => (
          <Draggable
            onStart={() => false}
            nodeRef={nodeRef}
            key={data.postedStickerId}
            defaultPosition={{ x: data.positionX, y: data.positionY }}
          >
            <S.Sticker ref={nodeRef} stickerImage={data.stickerImage} />
          </Draggable>
        ))}
        {isEditable && (
          <Draggable
            positionOffset={{
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
      </S.StickerContainer>
    </S.ZigZagViewWrapper>
  );
});
export default ZigZagView;
