import styled from '@emotion/styled';

export const BlurryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.Modal};
`;

export const LecueNoteModalWrapper = styled.div<{
  noteBackgroundColor: number;
  noteBackgroundImage: string;
  noteTextColor: number;
}>`
  position: relative;

  width: 31.1rem;
  height: 35.8rem;
  padding: 2rem 1.5rem;

  border-radius: 0.4rem;
  background: ${({ theme, noteBackgroundColor, noteBackgroundImage }) => {
    if (noteBackgroundColor === -1) {
      return `url(${noteBackgroundImage})`;
    } else {
      switch (noteBackgroundColor) {
        case 1:
          return theme.colors.sub_pink;
        case 2:
          return theme.colors.sub_blue;
        case 3:
          return theme.colors.sub_green;
        case 4:
          return theme.colors.sub_purple;
        case 5:
          return theme.colors.sub_yellow;
        case 6:
          return theme.colors.sub_ivory;
        default:
          return 'transparent';
      }
    }
  }};
  background-size: cover;
  color: ${({ theme, noteTextColor }) => {
    switch (noteTextColor) {
      case 0:
        return theme.colors.white;
      case 1:
        return theme.colors.BG;
    }
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
  overflow: scroll;

  width: 100%;
  height: 23.4rem;
  padding: 1.3rem 0.6rem;
  margin-top: 3rem;
`;

export const LecueNoteModalContent = styled.p`
  width: 100%;
  max-height: 100%;

  ${({ theme }) => theme.fonts.Title2_M_16};
`;

export const LecueNoteModalDate = styled.p`
  width: 100%;
  max-height: 100%;

  padding-right: 0.6rem;
  margin-top: 1.3rem;

  ${({ theme }) => theme.fonts.E_Body2_R_14};

  text-align: end;
`;
