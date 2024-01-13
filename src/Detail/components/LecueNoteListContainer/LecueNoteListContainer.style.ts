import styled from '@emotion/styled';

export const LecueNoteListContainerWrapper = styled.div<{
  backgroundColor: number;
}>`
  padding: 0 1.65rem;

  background-color: ${({ theme, backgroundColor }) => {
    switch (backgroundColor) {
      case 0:
        return theme.colors.white;
      case 1:
        return theme.colors.BG;
    }
  }};
  flex: 1;
`;

export const LecueNoteListViewWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`;
