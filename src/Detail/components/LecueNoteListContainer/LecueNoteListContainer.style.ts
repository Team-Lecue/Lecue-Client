import styled from '@emotion/styled';

export const LecueNoteListContainerWrapper = styled.div<{
  backgroundColor: string;
  isEditable: boolean;
}>`
  width: 100vw;
  min-height: calc(100dvh - 28.1rem);

  padding: 0 1.6rem;
  padding-bottom: ${({ isEditable }) => isEditable && '12rem'};

  background-color: ${({ backgroundColor }) => {
    return backgroundColor;
  }};

  flex: 1;
`;

export const LecueNoteListViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  width: 100%;
`;

export const StickerButton = styled.button`
  right: 2.057rem;
  bottom: 9.8rem;

  width: 6.8rem;
  height: 6.8rem;
`;

export const StickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 2.057rem;
  bottom: 9.8rem;
`;
