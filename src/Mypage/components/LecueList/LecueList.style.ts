import styled from '@emotion/styled';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const ButtonWrapper = styled.section`
  display: flex;

  width: 100%;
`;

export const Button = styled.button<{ clickedBtn?: boolean }>`
  width: calc(100vw - 4rem);
  height: 3.7rem;
  padding: 0.7rem 1.15rem;

  border-radius: 0.4rem 0.4rem 0 0;
  background-color: ${({ theme, clickedBtn }) =>
    clickedBtn ? theme.colors.black : 'transparent'};
  color: ${({ theme, clickedBtn }) =>
    clickedBtn ? theme.colors.background : theme.colors.MG};
  ${({ theme }) => theme.fonts.Title2_M_16}

  text-align: center;
  vertical-align: center;
`;

export const ListWrapper = styled.section<{ clickedBtn: boolean }>`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  overflow: scroll;

  width: 100%;
  height: calc(100dvh - 19.3rem);
  padding: 1.2rem 1rem 1rem;

  border-radius: ${({ clickedBtn }) => (clickedBtn ? 0 : 0.4)}rem
    ${({ clickedBtn }) => (clickedBtn ? 0.4 : 0)}rem 0.4rem 0.4rem;
  background-color: ${({ theme }) => theme.colors.black};
`;
