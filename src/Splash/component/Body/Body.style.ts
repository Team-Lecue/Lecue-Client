import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const BodyWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100vw;
  height: calc(100dvh - 18.7rem);
`;

export const LottieWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 37.973rem;
  height: 39.949rem;
  max-width: 100%;

  margin: 0 auto;
`;

export const LottieSkeleton = styled.div`
  width: 34.433rem;
  height: 33.933rem;
  max-width: 100%;

  border-radius: 1.6rem;
  background: linear-gradient(90deg, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite ease-in-out;
`;

export const TextWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-bottom: 3.2rem;
`;

export const Text = styled.p`
  ${({ theme }) => theme.fonts.Title2_M_16};
`;
