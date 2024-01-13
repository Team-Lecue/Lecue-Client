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

export const StickerButton = styled.button`
  position: fixed;
  right: 2.057rem;
  bottom: 9.8rem;

  width: 6.8rem;
  height: 6.8rem;
`;

export const WriteButton = styled.button`
  position: fixed;
  right: 2.057rem;
  bottom: 2rem;

  width: 6.8rem;
  height: 6.8rem;
`;

export const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 2rem;

  width: 100%;
  padding: 0 2.5rem;
`;
