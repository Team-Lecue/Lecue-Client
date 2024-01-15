import { IcX, ImgStarPosit } from '../../../assets';
import ModalPortal from '../../../components/common/Modal/ModalPortal';
import { LecueNoteType } from '../../types/myPageType';
import * as S from './NoteModal.style';

interface ModalProps {
  selectedNote: LecueNoteType | null;
}

function NoteModal({ selectedNote }: ModalProps) {
  const handleClickBtn = () => {
    alert(`${selectedNote?.noteId}로 가시겠습니까?`);
  };

  return (
    <ModalPortal>
      <S.BackgroundWrapper>
        <S.ModalWrapper
          noteBackgroundColor={selectedNote?.noteBackgroundColor || 0}
          noteTextColor={selectedNote?.noteTextColor || 0}
          noteBackgroundImage={selectedNote?.noteBackgroundImage || ''}
        >
          <S.Header>
            <S.NameWrapper>
              <ImgStarPosit />
              <S.FavoriteName>{selectedNote?.favoriteName}</S.FavoriteName>
            </S.NameWrapper>
            <S.CloseBtn>
              <IcX />
            </S.CloseBtn>
          </S.Header>
          <S.BodyWrapper>
            <S.Title>{selectedNote?.title}</S.Title>
            <S.ContentWrapper>
              <S.Content>{selectedNote?.content}</S.Content>
            </S.ContentWrapper>

            <S.NoteDate>{selectedNote?.noteDate}</S.NoteDate>
            <S.Button type="button" onClick={handleClickBtn}>
              롤링페이퍼 보러가기
            </S.Button>
          </S.BodyWrapper>
        </S.ModalWrapper>
      </S.BackgroundWrapper>
    </ModalPortal>
  );
}

export default NoteModal;
