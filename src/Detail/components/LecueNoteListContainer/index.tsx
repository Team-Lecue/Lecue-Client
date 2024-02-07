import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  BtnFloatingSticker,
  BtnFloatingStickerOrange,
  BtnFloatingWrite,
  BtnFloatingWriteOrange,
} from '../../../assets';
import CommonModal from '../../../components/common/Modal/CommonModal';
import useAuth from '../../../libs/hooks/useAuth';
// hooks
import usePostSticker from '../../hooks/usePostSticker';
import useScrollPosition from '../../hooks/useScrollPosition';
import useStickerState from '../../hooks/useStickerState';
import { NoteType, postedStickerType } from '../../type/lecueBookType';
//views
import AlertBanner from '../AlretBanner';
import EmptyView from '../EmptyView';
import LecueNoteListHeader from '../LecueNoteLIstHeader';
import LinearView from '../LinearView';
import ZigZagView from '../ZigZagView';
//style
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
  const { stickerState, setStickerState, handleDrag } =
    useStickerState(savedScrollPosition);
  const isLoggedIn = useAuth();
  const { state } = location;

  //state
  const [fullHeight, setFullHeight] = useState<number | null>(null);
  const [heightFromBottom, setHeightFromBottom] = useState<number | null>(null);
  const [isZigZagView, setIsZigZagView] = useState<boolean>(true);
  const [modalOn, setModalOn] = useState<boolean>(false);

  useEffect(() => {
    if (scrollRef.current) {
      if (scrollRef.current.offsetHeight) {
        setFullHeight(scrollRef.current.offsetHeight);
      }

      if (fullHeight !== null) {
        setHeightFromBottom(fullHeight - stickerState.positionY);
      }
    }
  }, [scrollRef]);

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
          handleFn={() => navigate(`/login`)}
        />
      )}
    </S.LecueNoteListContainerWrapper>
  );
}

export default LecueNoteListContainer;
