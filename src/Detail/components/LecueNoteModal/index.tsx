import { createPortal } from 'react-dom';

import { IcX } from '../../../assets';
import * as S from './LecueNoteModal.style';
const modalContainer = document.getElementById(
  'lecuenote-modal',
) as HTMLElement;

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

interface LecueNoteModalProps {
  selectedNote: Note | null;
}

function LecueNoteModal({ selectedNote }: LecueNoteModalProps) {
  return createPortal(
    <S.BlurryContainer>
      <S.LecueNoteModalWrapper
        noteBackgroundColor={selectedNote?.noteBackgroundColor || 0}
        noteBackgroundImage={selectedNote?.noteBackgroundImage || ''}
        noteTextColor={selectedNote?.noteTextColor || 0}
      >
        <S.CloseButton>
          <IcX />
        </S.CloseButton>
        <S.LecueNoteModalNickname>
          {selectedNote?.noteNickname}
        </S.LecueNoteModalNickname>
        <S.LecueNoteModalContentWrapper>
          <S.LecueNoteModalContent>
            {selectedNote?.content}
          </S.LecueNoteModalContent>
        </S.LecueNoteModalContentWrapper>
        <S.LecueNoteModalDate>{selectedNote?.noteDate}</S.LecueNoteModalDate>
      </S.LecueNoteModalWrapper>
    </S.BlurryContainer>,
    modalContainer,
  );
}

export default LecueNoteModal;
