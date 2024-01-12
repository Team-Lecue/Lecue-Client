import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const infiniteSlide = keyframes`
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-50%);
    }
`;

export const SliderBannerWrapper = styled.div`
  position: fixed;
  overflow: hidden;
  z-index: 1;

  width: 100%;
  height: 4.4rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.BG};
  background-color: ${({ theme }) => theme.colors.key};
`;

export const AnimationBox = styled.div<{
  width: number;
  animationDuration: number;
}>`
  display: flex;

  width: ${(props) => props.width}rem;
  max-width: none;

  height: 100%;

  animation: ${infiniteSlide};
  animation-duration: ${(props) => props.animationDuration}s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export const SlideBannerItemList = styled.div<{ width: number }>`
  display: flex;
  align-items: center;

  width: ${(props) => props.width}rem;
  max-width: none;

  height: 100%;
`;
