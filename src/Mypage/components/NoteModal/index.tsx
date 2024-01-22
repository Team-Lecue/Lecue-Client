import { useNavigate } from 'react-router-dom';

import { IcX, ImgStarPosit } from '../../../assets';
import ModalPortal from '../../../components/common/Modal/ModalPortal';
import { LecueNoteType } from '../../types/myPageType';
import * as S from './NoteModal.style';

interface ModalProps {
  bookUuid: string;
  selectedNote: LecueNoteType;
  setClickedCloseBtn: React.Dispatch<React.SetStateAction<boolean>>;
}

function NoteModal({ bookUuid, selectedNote, setClickedCloseBtn }: ModalProps) {
  const navigate = useNavigate();
  const handleClickBtn = () => {
    navigate(`/lecue-book/${bookUuid}`);
  };

  const handleClickCloseBtn = () => {
    setClickedCloseBtn((prev) => !prev);
  };

  return (
    <ModalPortal>
      <S.BackgroundWrapper>
        <S.ModalWrapper
          noteBackground={selectedNote.noteBackground}
          noteTextColor={selectedNote.noteTextColor}
        >
          <S.Header>
            <S.NameWrapper>
              <ImgStarPosit />
              <S.FavoriteName>{selectedNote.favoriteName}</S.FavoriteName>
            </S.NameWrapper>
            <S.CloseBtn type="button" onClick={handleClickCloseBtn}>
              <IcX />
            </S.CloseBtn>
          </S.Header>
          <S.BodyWrapper>
            <S.Title>{selectedNote.title}</S.Title>
            <S.ContentWrapper>
              <S.Content>{selectedNote.content}</S.Content>
            </S.ContentWrapper>

            <S.NoteDate>{selectedNote.noteDate}</S.NoteDate>
            <S.Button type="button" onClick={handleClickBtn}>
              레큐북 보러가기
            </S.Button>
          </S.BodyWrapper>
        </S.ModalWrapper>
      </S.BackgroundWrapper>
    </ModalPortal>
  );
}

export default NoteModal;
