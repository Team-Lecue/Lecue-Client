import { useRef } from 'react';
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
}

function ZigZagView({
  noteList,
  handleDrag,
  stickerState,
  isEditable,
  postedStickerList,
}: ZigZagViewProps) {
  const nodeRef = useRef(null);

  return (
    <S.ZigZagViewWrapper>
      {noteList.map((note) => (
        <S.LecueNoteContainer key={note.noteId}>
          <SmallLecueNote {...note} noteList={noteList} />
        </S.LecueNoteContainer>
      ))}
      <S.StickerContainer>
        {postedStickerList.map((data) => (
          <Draggable
            nodeRef={nodeRef}
            key={data.postedStickerId}
            positionOffset={{ x: data.positionX, y: data.positionY }}
            onStart={() => false}
          >
            <S.Sticker ref={nodeRef} stickerImage={data.stickerImage} />
          </Draggable>
        ))}
      </S.StickerContainer>
      {isEditable && (
        <S.StickerContainer>
          <Draggable
            defaultPosition={{
              x: stickerState.positionX,
              y: stickerState.positionY,
            }}
            onDrag={handleDrag}
            bounds="parent"
            nodeRef={nodeRef}
          >
            <S.Sticker ref={nodeRef} stickerImage={stickerState.stickerImage} />
          </Draggable>
        </S.StickerContainer>
      )}
    </S.ZigZagViewWrapper>
  );
}

export default ZigZagView;
