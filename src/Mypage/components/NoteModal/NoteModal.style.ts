import styled from '@emotion/styled';

export const BackgroundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 9;

  width: 100vw;
  height: 100dvh;

  background-color: ${({ theme }) => theme.colors.Modal};
`;

export const ModalWrapper = styled.div<{
  noteBackground: string | undefined;
  noteTextColor: string | undefined;
}>`
  position: relative;

  width: 31.1rem;
  padding: 0.6rem 0.4rem 1.5rem 2rem;

  border-radius: 0.4rem;
  background-size: cover;
  color: ${({ noteTextColor }) => {
    return noteTextColor;
  }};

  ${({ noteBackground }) => {
    if (noteBackground?.substring(0, 1) === '#') {
      return `background-color: ${noteBackground}`;
    } else {
      return `background: url(${noteBackground});
      background-size: cover;`;
    }
  }}
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
  color: ${({ theme }) => theme.colors.BG};
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
  overflow-y: scroll;

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
