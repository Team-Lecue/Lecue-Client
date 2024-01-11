import styled from '@emotion/styled';

export const BlurryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const LecueNoteModalWrapper = styled.div<{
  noteBackgroundColor: number;
}>`
  position: relative;

  width: 31.1rem;
  height: 35.8rem;
  padding: 2rem 1.5rem;

  border-radius: 0.4rem;
  background-color: ${({ theme, noteBackgroundColor }) => {
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
  color: ${({ theme }) => theme.colors.BG};
  ${({ theme }) => theme.fonts.Head2_SB_18};
`;

export const LecueNoteModalContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 23.4rem;
  margin-top: 3rem;
  padding: 1.3rem 0.6rem;

  overflow: scroll;
`;

export const LecueNoteModalContent = styled.p`
  width: 100%;
  max-height: 100%;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.Title2_M_16};
`;

export const LecueNoteModalDate = styled.p`
  width: 100%;
  max-height: 100%;
  margin-top: 1.3rem;
  padding-right: 0.6rem;

  color: ${({ theme }) => theme.colors.DG};
  ${({ theme }) => theme.fonts.E_Body2_R_14};

  text-align: end;
`;
