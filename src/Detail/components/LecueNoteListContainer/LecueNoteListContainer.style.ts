import styled from '@emotion/styled';

export const LecueNoteListContainerWrapper = styled.div<{
  backgroundColor: number;
}>`
  flex: 1;

  background-color: ${({ theme, backgroundColor }) => {
    switch (backgroundColor) {
      case 0:
        return theme.colors.white;
      case 1:
        return theme.colors.BG;
    }
  }};

  padding: 0 1.65rem;
`;
