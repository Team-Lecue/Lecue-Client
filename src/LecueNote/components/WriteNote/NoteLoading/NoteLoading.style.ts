import styled from '@emotion/styled';

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  border: 0.6rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const LottieWrapper = styled.div`
  width: 10rem;
  height: 10rem;
`;
