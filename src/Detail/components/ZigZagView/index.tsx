import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';

import { postedStickerType } from '../LecueNoteListContainer';
import SmallLecueNote from '../SmallLecueNote';
import * as S from './ZigZagView.style';

interface Note {
  noteId: number;
  renderType: number;
  content: string;
  noteDate: string;
  noteNickname: string;
  noteBackgroundColor: number;
  noteBackgroundImage: string;
  noteTextColor: number;
}

interface ZigZagViewProps {
  noteList: Note[];
  handleDrag: (e: DraggableEvent, ui: DraggableData) => void;
  stickerState: postedStickerType;
  isEditable: boolean;
}

function ZigZagView({
  noteList,
  handleDrag,
  stickerState,
  isEditable,
}: ZigZagViewProps) {

  return (
    <S.ZigZagViewWrapper>
      {noteList.map((note) => (
        <S.LecueNoteContainer key={note.noteId}>
          <SmallLecueNote {...note} noteList={noteList} />
        </S.LecueNoteContainer>
      ))}
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
            <S.Sticker ref={nodeRef} stickerState={stickerState} />
          </Draggable>
        </S.StickerContainer>
      )}
    </S.ZigZagViewWrapper>
  );
}

export default ZigZagView;
