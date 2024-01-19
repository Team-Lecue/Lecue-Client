import styled from '@emotion/styled';

export const LecueNoteListHeaderWrapper = styled.div<{
  backgroundColor: string;
}>`
  display: flex;
  position: sticky;
  top: 9.8rem;
  z-index: 2;

  padding: 1.2rem 0;

  background-color: transparent;
  column-gap: 1rem;
`;

export const LecueNoteCountBox = styled.div<{ backgroundColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.05rem 1.6rem;

  border-radius: 7rem;
  background-color: ${({ theme, backgroundColor }) => {
    backgroundColor;
    switch (backgroundColor) {
      case '#F5F5F5':
        return theme.colors.BG;
      case '#191919':
        return theme.colors.background;
    }
  }};
  color: ${({ theme, backgroundColor }) => {
    switch (backgroundColor) {
      case '#F5F5F5':
        return theme.colors.background;
      case '#191919':
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
