import styled from '@emotion/styled';

export const Wrapper = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100dvh;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const MyPageBodyWrapper = styled.div`
  width: 100%;
  padding: 0 1.6rem;
  margin-top: 5.4rem;
`;
