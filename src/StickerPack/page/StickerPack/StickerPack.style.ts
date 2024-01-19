import styled from '@emotion/styled';

export const Body = styled.article`
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 0 1.64rem;
  padding-bottom: 5rem;
  margin-top: 5.5rem;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100dvh;
`;

export const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 2rem;

  width: 100%;
  padding: 0 2.5rem;
`;
