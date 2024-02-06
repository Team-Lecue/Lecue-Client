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
import useScrollPosition from '../../hooks/useScrollPosition';
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
  const navigate = useNavigate();
  const location = useLocation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const { savedScrollPosition } = useScrollPosition();
  //storage
  const storedValue = sessionStorage.getItem('scrollPosition');
  const isLoggedIn = useAuth();
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

      navigate('/sticker-pack', { state: { bookId: bookId }, replace: true });
    } else {
      setModalOn(true);
    }
  };

  const handleClickModalBtn = () => {
    navigate(`/login`);
  };

  const handleClickWriteButton = () => {
    if (
      localStorage.getItem('token') &&
      localStorage.getItem('token') !== null
    ) {
      navigate(`/create-note`, {
        state: { bookId: bookId },
      });
    } else {
      setModalOn(true);
    }
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
  }, [fullHeight, stickerState.positionY, scrollRef]);

  useEffect(() => {
    if (state) {
      const { stickerId, stickerImage } = state.sticker;
      window.scrollTo(0, savedScrollPosition);
      setStickerState((prev) => ({
        ...prev,
        postedStickerId: stickerId,
        stickerImage: stickerImage,
      }));
    } else {
      setEditableStateFalse();
    }
  }, [state, isEditable]);

  const handleClickDone = usePostSticker({
    bookUuid,
    heightFromBottom,
    stickerState,
    bookId,
  });

  const handleClickIconButton = (isSticker: boolean) => {
    if (isLoggedIn) {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
      const path = isSticker ? '/sticker-pack' : '/create-note';
      navigate(path, { state: { bookId }, replace: true });
    } else {
      setModalOn(true);
    }
  };

  const renderFloatingButton = (isSticker: boolean) => (
    <button type="button" onClick={() => handleClickIconButton(isSticker)}>
      {backgroundColor === '#F5F5F5' ? (
        isSticker ? (
          <BtnFloatingSticker />
        ) : (
          <BtnFloatingWrite />
        )
      ) : isSticker ? (
        <BtnFloatingStickerOrange />
      ) : (
        <BtnFloatingWriteOrange />
      )}
    </button>
  );

  return (
    <S.LecueNoteListContainerWrapper
      isEditable={isEditable}
      backgroundColor={backgroundColor}
    >
      <LecueNoteListHeader
        isEditable={isEditable}
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

      {!isEditable ? (
        <>
          {noteList.length !== 0 && renderFloatingButton(true)}
          {renderFloatingButton(false)}
        </>
      ) : (
        <AlertBanner onClick={handleClickDone} />
      )}

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
