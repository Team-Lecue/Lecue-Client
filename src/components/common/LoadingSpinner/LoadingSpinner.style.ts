import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 70, 150;
    stroke-dashoffset: -25;
  }
  100% {
    stroke-dasharray: 70, 150;
    stroke-dashoffset: -120;
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 12rem;
  height: 12rem;
`;

export const SpinnerTrack = styled.svg`
  position: absolute;

  width: 7.4rem;
  height: 7.4rem;
`;

export const Spinner = styled.svg`
  position: absolute;

  width: 7.4rem;
  height: 7.4rem;

  animation: ${rotate} 2s linear infinite;

  & circle {
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`;

