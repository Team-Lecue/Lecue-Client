import { useEffect, useState } from 'react';
import { DraggableData, DraggableEvent } from 'react-draggable';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  BtnFloatingSticker,
  BtnFloatingStickerOrange,
  BtnFloatingWrite,
  BtnFloatingWriteOrange,
} from '../../../assets';
import Button from '../../../components/common/Button';
import { postedStickerType } from '../../type/lecueBookType';
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
  //hooks
  const location = useLocation();
  const navigate = useNavigate();
  //storage
  const storedValue = sessionStorage.getItem('scrollPosition');
  const savedScrollPosition =
    storedValue !== null ? parseInt(storedValue, 10) : 0;
  //state
  const [isZigZagView, setIsZigZagView] = useState<boolean>(true);
  const [isEditable, setIsEditable] = useState(true);
  const [stickerState, setStickerState] = useState<postedStickerType>({
    postedStickerId: 0,
    stickerImage: '',
    positionX: 0,
    positionY: savedScrollPosition,
  });

  const { state } = location;

  useEffect(() => {
    // editable 상태 변경
    if (state) {
      window.scrollTo(0, savedScrollPosition);
      const { stickerId, stickerImage } = state.sticker;
      setStickerState((prev) => ({
        ...prev,
        postedStickerId: stickerId,
        stickerImage: stickerImage,
      }));
    } else {
      // editable 상태 변경
      setIsEditable(false);
      navigate('/detail');
    }
  }, [state]);

  // 스티커 위치 값 저장
  const handleDrag = (_e: DraggableEvent, ui: DraggableData) => {
    const { positionX, positionY } = stickerState;
    setStickerState((prev) => ({
      ...prev,
      positionX: positionX + ui.deltaX,
      positionY: positionY + ui.deltaY,
    }));
  };

  const handleClickStickerButton = () => {
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());

    setIsEditable(true);

    navigate('/sticker-pack');
  };

  const handleClickWriteButton = () => {
    alert('WriteBtn');
  };

  const handleClickDone = () => {
    setIsEditable(true);
    sessionStorage.removeItem('scrollPosition');
    navigate('/detail');
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
          <ZigZagView
            noteList={noteList}
            isEditable={isEditable}
            handleDrag={handleDrag}
            stickerState={stickerState}
          />
        ) : (
          <LinearView noteList={noteList} />
        )}
      </S.LecueNoteListViewWrapper>

      {!isEditable && (
        <>
          <S.StickerButton type="button" onClick={handleClickStickerButton}>
            {backgroundColor === 0 ? (
              <BtnFloatingSticker />
            ) : (
              <BtnFloatingStickerOrange />
            )}
          </S.StickerButton>
          <S.WriteButton type="button" onClick={handleClickWriteButton}>
            {backgroundColor === 0 ? (
              <BtnFloatingWrite />
            ) : (
              <BtnFloatingWriteOrange />
            )}
          </S.WriteButton>
        </>
      )}

      {isEditable && (
        <S.ButtonWrapper>
          <Button variant="choose" onClick={handleClickDone}>
            부착 완료
          </Button>
        </S.ButtonWrapper>
      )}
    </S.LecueNoteListContainerWrapper>
  );
}

export default LecueNoteListContainer;
