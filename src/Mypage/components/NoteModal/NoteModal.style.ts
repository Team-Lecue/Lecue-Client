import styled from '@emotion/styled';

export const BackgroundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  width: 100vw;
  height: 100dvh;

  background-color: ${({ theme }) => theme.colors.Modal};
`;

export const ModalWrapper = styled.div<{
  noteBackgroundColor: number;
  noteBackgroundImage: string;
  noteTextColor: number;
}>`
  position: relative;

  width: 31.1rem;
  padding: 0.6rem 0.4rem 1.5rem 2rem;

  border-radius: 0.4rem;
  background: ${({ theme, noteBackgroundColor, noteBackgroundImage }) => {
    if (noteBackgroundColor === -1) {
      return `url(${noteBackgroundImage})`;
    } else {
      switch (noteBackgroundColor) {
        case 0:
          return theme.colors.sub_pink;
        case 1:
          return theme.colors.sub_ivory;
        case 2:
          return theme.colors.sub_yellow;
        case 3:
          return theme.colors.sub_green;
        case 4:
          return theme.colors.sub_blue;
        case 5:
          return theme.colors.sub_purple;
        case 6:
          return '#FE394C';
        case 7:
          return '#9852F9';
        case 8:
          return '#FFD600';
        case 9:
          return '#98ED4D';
        case 10:
          return '#FF71B3';
        case 11:
          return '#CCCCCC';
        default:
          return 'transparent';
      }
    }
  }};
  background-size: cover;
  color: ${({ theme, noteTextColor }) =>
    noteTextColor === 0 ? theme.colors.white : theme.colors.BG};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  padding-bottom: 1.5rem;
`;

export const NameWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const CloseBtn = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  padding-bottom: 0.3rem;
`;

export const FavoriteName = styled.p`
  ${({ theme }) => theme.fonts.Head2_SB_18};
`;

export const BodyWrapper = styled.div`
  width: 100%;
  padding-right: 1.4rem;
`;
export const Title = styled.p`
  padding-bottom: 0.8rem;

  ${({ theme }) => theme.fonts.Head2_SB_18};
`;

export const ContentWrapper = styled.div`
  overflow: scroll;

  width: 100%;
  height: 17.2rem;
  padding-right: 0.6rem;
`;

export const Content = styled.p`
  width: 100%;
  height: 17.2rem;

  ${({ theme }) => theme.fonts.Body1_R_16};
`;

export const NoteDate = styled.p`
  padding: 1.2rem 0;

  ${({ theme }) => theme.fonts.E_Body2_R_14};
  color: ${({ theme }) => theme.colors.DG};

  text-align: end;
`;

export const Button = styled.button`
  width: 100%;
  height: 4.8rem;

  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;
