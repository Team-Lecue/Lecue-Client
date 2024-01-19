import { createPortal } from 'react-dom';

import { IcX } from '../../../assets';
import { NoteType } from '../../type/lecueBookType';
import * as S from './LecueNoteModal.style';
const modalContainer = document.getElementById(
  'lecuenote-modal',
) as HTMLElement;

interface LecueNoteModalProps {
  selectedNote: NoteType;
  closeModal: () => void;
}

function LecueNoteModal({ selectedNote, closeModal }: LecueNoteModalProps) {
  const handleCloseButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation();
    closeModal();
  };
  return createPortal(
    <S.BlurryContainer>
      <S.LecueNoteModalWrapper
        noteBackground={selectedNote.noteBackground}
        noteTextColor={selectedNote.noteTextColor}
      >
        <S.CloseButton type="button" onClick={handleCloseButtonClick}>
          <IcX />
        </S.CloseButton>
        <S.LecueNoteModalNickname>
          {selectedNote.noteNickname}
        </S.LecueNoteModalNickname>
        <S.LecueNoteModalContentWrapper>
          <S.LecueNoteModalContent>
            {selectedNote.content}
          </S.LecueNoteModalContent>
        </S.LecueNoteModalContentWrapper>
        <S.LecueNoteModalDate>{selectedNote.noteDate}</S.LecueNoteModalDate>
      </S.LecueNoteModalWrapper>
    </S.BlurryContainer>,
    modalContainer,
  );
}

export default LecueNoteModal;
