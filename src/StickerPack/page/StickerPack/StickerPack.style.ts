import styled from '@emotion/styled';

export const Body = styled.article`
  padding: 0 1.64rem;
  padding-bottom: 5rem;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100dvh;
`;
