import { useEffect, useRef, useState } from 'react';
import { DraggableData, DraggableEvent } from 'react-draggable';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  BtnFloatingSticker,
  BtnFloatingStickerOrange,
  BtnFloatingWrite,
  BtnFloatingWriteOrange,
} from '../../../assets';
import CommonModal from '../../../components/common/Modal/CommonModal';
import usePostStickerState from '../../../StickerAttach/hooks/usePostStickerState';
import { NoteType, postedStickerType } from '../../type/lecueBookType';
import AlertBanner from '../AlretBanner';
import EmptyView from '../EmptyView';
import LecueNoteListHeader from '../LecueNoteLIstHeader';
import LinearView from '../LinearView';
import ZigZagView from '../ZigZagView';
import * as S from './LecueNoteListContainer.style';

interface LecueNoteListContainerProps {
  noteNum: number;
  backgroundColor: string;
  noteList: NoteType[];
  postedStickerList: postedStickerType[];
  isEditable: boolean;
  setEditableStateFalse: () => void;
  bookUuid: string;
  bookId: number;
}

function LecueNoteListContainer(props: LecueNoteListContainerProps) {
  const {
    noteNum,
    backgroundColor,
    noteList,
    postedStickerList,
    isEditable,
    setEditableStateFalse,
    bookUuid,
    bookId,
  } = props;
  //hooks
  const location = useLocation();
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  //storage
  const storedValue = sessionStorage.getItem('scrollPosition');
  const savedScrollPosition =
    storedValue !== null ? parseInt(storedValue, 10) : 0;

  //state
  const [fullHeight, setFullHeight] = useState<number | null>(null);
  const [heightFromBottom, setHeightFromBottom] = useState<number | null>(null);
  const [modalOn, setModalOn] = useState<boolean>(false);
  const [isZigZagView, setIsZigZagView] = useState<boolean>(true);
  const [stickerState, setStickerState] = useState<postedStickerType>({
    postedStickerId: 0,
    stickerImage: '',
    positionX: 0,
    positionY: savedScrollPosition,
  });
  const { state } = location;

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
    if (
      localStorage.getItem('token') &&
      localStorage.getItem('token') !== null
    ) {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());

      navigate('/sticker-pack', { state: { bookId: bookId } });
    } else {
      setModalOn(true);
    }
  };

  const handleClickModalBtn = () => {
    navigate(`/login`);
  };

  const handleClickWriteButton = () => {
    navigate(`/create-note/${bookUuid}`, {
      state: { bookId: bookId },
    });
  };

  useEffect(() => {
    if (scrollRef.current) {
      if (scrollRef.current.offsetHeight) {
        setFullHeight(scrollRef.current.offsetHeight);
      }

      if (fullHeight !== null) {
        setHeightFromBottom(fullHeight - stickerState.positionY);
      }
    }
  }, [fullHeight, stickerState.positionY]);

  useEffect(() => {
    // state : 라우터 타고 온 스티커 값
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
      setEditableStateFalse();
    }
  }, [state, isEditable]);

  const postMutation = usePostStickerState(bookUuid);

  const handleClickDone = () => {
    // 다 붙였을 때 post 실행
    const { postedStickerId, positionX } = stickerState;

    if (heightFromBottom !== null) {
      postMutation.mutate({
        postedStickerId: postedStickerId,
        bookId: bookId,
        positionX: positionX,
        positionY: heightFromBottom,
      });
    }

    setEditableStateFalse();
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
        {noteList.length === 0 ? (
          <EmptyView />
        ) : isZigZagView ? (
          <ZigZagView
            fullHeight={fullHeight}
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
            {backgroundColor === '#F5F5F5'
              ? noteList.length !== 0 && <BtnFloatingSticker />
              : noteList.length !== 0 && <BtnFloatingStickerOrange />}
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

      {isEditable && <AlertBanner onClick={handleClickDone} />}

      {modalOn && (
        <CommonModal
          category="login"
          setModalOn={setModalOn}
          handleFn={handleClickModalBtn}
        />
      )}
    </S.LecueNoteListContainerWrapper>
  );
}

export default LecueNoteListContainer;
