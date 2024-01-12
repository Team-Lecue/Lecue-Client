import styled from '@emotion/styled';

export const Body = styled.article`
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
