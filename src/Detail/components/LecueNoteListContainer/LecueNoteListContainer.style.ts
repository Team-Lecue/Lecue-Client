import styled from '@emotion/styled';

export const LecueNoteListContainerWrapper = styled.div<{
  backgroundColor: number;
  isEditable: boolean;
}>`
  width: 100vw;
  padding: 0 1.6rem;
  padding-bottom: ${({ isEditable }) => isEditable && '12rem'};

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
  position: relative;

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
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  bottom: 2rem;

  width: 92%;
`;

export const AlertBanner = styled.div`
  display: flex;
  gap: 0.4rem;
  justify-content: center;

  width: 90%;
  padding: 1.1rem 2.35rem;
  margin-bottom: 1rem;

  border-radius: 0.6rem;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.key};

  text-align: center;
  ${({ theme }) => theme.fonts.Caption2_SB_12};
`;
