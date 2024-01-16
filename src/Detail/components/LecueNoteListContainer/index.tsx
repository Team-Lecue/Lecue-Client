import { useEffect, useRef, useState } from 'react';
import { DraggableData, DraggableEvent } from 'react-draggable';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  BtnFloatingSticker,
  BtnFloatingStickerOrange,
  BtnFloatingWrite,
  BtnFloatingWriteOrange,
  IcCaution,
} from '../../../assets';
import Button from '../../../components/common/Button';
import usePostStickerState from '../../../StickerAttach/hooks/usePostStickerState';
import { NoteType, postedStickerType } from '../../type/lecueBookType';
import LecueNoteListHeader from '../LecueNoteLIstHeader';
import LinearView from '../LinearView';
import ZigZagView from '../ZigZagView';
import * as S from './LecueNoteListContainer.style';

interface LecueNoteListContainerProps {
  noteNum: number;
  backgroundColor: string;
  noteList: NoteType[];
  postedStickerList: postedStickerType[];
}

function LecueNoteListContainer({
  noteNum,
  backgroundColor,
  noteList,
  postedStickerList,
}: LecueNoteListContainerProps) {
  //hooks
  const location = useLocation();
  const navigate = useNavigate();
  const scrollRef = useRef(document.createElement('div'));
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

  const postMutation = usePostStickerState();

  useEffect(() => {
    // state : 라우터 타고 온 스티커 값, 즉 스티커 값을 갖고 있는 상태라면
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
    }
  }, [state]);

  // 스티커 위치 값 저장
  const handleDrag = (_e: DraggableEvent, ui: DraggableData) => {
    const { positionX, positionY } = stickerState;
    setStickerState((prev) => ({
      ...prev,
      positionX: Math.ceil(positionX + ui.deltaX),
      positionY: Math.ceil(positionY + ui.deltaY),
    }));
  };

  // 스티커 버튼 클릭시
  const handleClickStickerButton = () => {
    // 현재 스크롤 위치 저장
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());

    navigate('/sticker-pack');
  };

  const handleClickWriteButton = () => {
    navigate('/create-note');
  };

  const handleClickDone = () => {
    // 다 붙였을 때 post 실행
    const { postedStickerId, positionX, positionY } = stickerState;
    const bookId = 1;

    postMutation.mutate({
      postedStickerId: postedStickerId,
      bookId: bookId,
      positionX: positionX,
      positionY: positionY,
    });

    setIsEditable(false);
  };

  return (
    <S.LecueNoteListContainerWrapper
      isEditable={isEditable}
      backgroundColor={backgroundColor}
    >
      <LecueNoteListHeader
        noteNum={noteNum}
        backgroundColor={backgroundColor}
        isZigZagView={isZigZagView}
        buttonOnClick={() => setIsZigZagView(!isZigZagView)}
      />
      <S.LecueNoteListViewWrapper>
        {isZigZagView ? (
          <ZigZagView
            savedScrollPosition={savedScrollPosition}
            noteList={noteList}
            isEditable={isEditable}
            handleDrag={handleDrag}
            stickerState={stickerState}
            postedStickerList={postedStickerList}
            ref={scrollRef}
          />
        ) : (
          <LinearView noteList={noteList} />
        )}
      </S.LecueNoteListViewWrapper>

      {!isEditable && (
        <>
          <S.StickerButton type="button" onClick={handleClickStickerButton}>
            {backgroundColor === '#F5F5F5' ? (
              <BtnFloatingSticker />
            ) : (
              <BtnFloatingStickerOrange />
            )}
          </S.StickerButton>
          <S.WriteButton type="button" onClick={handleClickWriteButton}>
            {backgroundColor === '#F5F5F5' ? (
              <BtnFloatingWrite />
            ) : (
              <BtnFloatingWriteOrange />
            )}
          </S.WriteButton>
        </>
      )}

      {isEditable && (
        <>
          <S.ButtonWrapper>
            <S.AlertBanner>
              <IcCaution />
              스티커는 한 번 붙이면 수정/삭제할 수 없습니다
            </S.AlertBanner>
            <Button variant="choose" onClick={handleClickDone}>
              부착 완료
            </Button>
          </S.ButtonWrapper>
        </>
      )}
    </S.LecueNoteListContainerWrapper>
  );
}

export default LecueNoteListContainer;
