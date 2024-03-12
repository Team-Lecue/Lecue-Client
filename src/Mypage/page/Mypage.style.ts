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
  margin-top: 5.4rem;
`;
