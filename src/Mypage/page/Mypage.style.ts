import styled from '@emotion/styled';

export const Wrapper = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100dvh;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const InfoWrapper = styled.div`
  width: 100%;
  padding: 0 0.95rem 1rem;
  margin-top: 5.4rem;
`;

export const ListWrapper = styled.div`
  width: 100%;
  height: calc(100dvh - 14.6rem);
  padding: 0 1rem 1rem;
`;
