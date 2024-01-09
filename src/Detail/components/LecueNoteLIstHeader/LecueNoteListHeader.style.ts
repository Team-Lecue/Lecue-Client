import styled from '@emotion/styled';

export const LecueNoteListHeaderWrapper = styled.div<{
  backgroundColor: number;
}>`
  display: flex;
  column-gap: 1rem;
  position: sticky;
  z-index: 2;
  top: 9.8rem;

  padding: 1.2rem 1.65rem 0 1.65rem;

  background-color: transparent;
`;

export const LecueNoteCountBox = styled.div<{ backgroundColor: number }>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.05rem 1.8rem;

  border-radius: 7rem;
  background-color: ${({ theme, backgroundColor }) => {
    switch (backgroundColor) {
      case 0:
        return theme.colors.BG;
      case 1:
        return theme.colors.white;
    }
  }};
  color: ${({ theme, backgroundColor }) => {
    switch (backgroundColor) {
      case 0:
        return theme.colors.white;
      case 1:
        return theme.colors.BG;
    }
  }};
  ${({ theme }) => theme.fonts.E_Body2_R_14};
`;

export const LecueNoteRenderModeButton = styled.button`
  position: relative;
  z-index: 2;

  width: 3.8rem;
  height: 3.8rem;
`;
