import styled from '@emotion/styled';

export const BlurryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;

  width: 100vw;
  height: 100dvh;

  background-color: ${({ theme }) => theme.colors.Modal};
`;

export const LecueNoteModalWrapper = styled.div<{
  noteBackground?: string;
  noteTextColor: string;
}>`
  position: relative;

  width: 31.1rem;
  height: 35.8rem;
  padding: 2rem 1.5rem;

  border-radius: 0.4rem;
  ${({ noteBackground }) => {
    if (noteBackground?.substring(0, 1) === '#') {
      return `background-color: ${noteBackground}`;
    } else {
      return `background: url(${noteBackground})`;
    }
  }};
  background-size: 31.1rem 35.8rem;
  color: ${({ noteTextColor }) => {
    return noteTextColor;
  }};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;

  width: 3.2rem;
  height: 3.2rem;
`;

export const LecueNoteModalNickname = styled.p`
  ${({ theme }) => theme.fonts.Head2_SB_18};
`;

export const LecueNoteModalContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;

  width: 100%;
  height: 23.4rem;
  padding: 0 0.6rem;
  margin-top: 3rem;
`;

export const LecueNoteModalContent = styled.p`
  width: 100%;
  max-height: 100%;

  ${({ theme }) => theme.fonts.Title2_M_16};

  white-space: pre-wrap;
`;

export const LecueNoteModalDate = styled.p`
  width: 100%;
  max-height: 100%;

  padding-right: 0.6rem;
  margin-top: 1.3rem;

  ${({ theme }) => theme.fonts.E_Body2_R_14};
  color: ${({ theme }) => theme.colors.DG50};

  text-align: end;
`;
