import styled from '@emotion/styled';

export const Wrapper = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100dvh;
  padding: 0 1.6rem;

  background-color: ${({ theme }) => theme.colors.background};
`;
