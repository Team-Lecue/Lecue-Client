import { useNavigate } from 'react-router-dom';

import { IcX, ImgStarPosit } from '../../../assets';
import ModalPortal from '../../../components/common/Modal/ModalPortal';
import { ModalProps } from '../../types/myPageType';
import * as S from './NoteModal.style';

function NoteModal(props: ModalProps) {
  const { bookUuid, selectedNote, handleSetClickedCloseBtn } = props;

  const navigate = useNavigate();

  const handleClickBtn = () => {
    navigate(`/lecue-book/${bookUuid}`);
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
            <S.CloseBtn type="button" onClick={handleSetClickedCloseBtn}>
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
