import { useEffect, useRef, useState } from 'react';
import { DraggableData, DraggableEvent } from 'react-draggable';
import { useQueryClient } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  BtnFloatingSticker,
  BtnFloatingStickerOrange,
  BtnFloatingWrite,
  BtnFloatingWriteOrange,
  IcCaution,
} from '../../../assets';
import Button from '../../../components/common/Button';
import { postStickerState } from '../../../StickerAttach/api/postStickerState';
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
  const queryClient = useQueryClient();
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
    if (scrollRef.current) {
      const CalcYPosition =
        scrollRef.current.scrollHeight - stickerState.positionY;
      const FullHeight = scrollRef.current.scrollHeight;
      console.log(CalcYPosition);
      console.log(FullHeight);
    }
  }, [scrollRef.current, stickerState]);

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
      navigate('/lecue-book');
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

  const handleClickStickerButton = () => {
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());

    setIsEditable(true);

    navigate('/sticker-pack');
  };

  const handleClickWriteButton = () => {
    alert('WriteBtn');
  };

  const handleClickDone = () => {
    const { postedStickerId, positionX, positionY } = stickerState;
    const bookId = 1;
    postStickerState({ postedStickerId, bookId, positionX, positionY });

    setIsEditable(true);

    sessionStorage.removeItem('scrollPosition');

    navigate('/lecue-book');
  };

  // const { mutate: postSticker } = useMutation(postStickerState, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('stickerState');
  //   },
  //   onError: () => {},
  // });

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
