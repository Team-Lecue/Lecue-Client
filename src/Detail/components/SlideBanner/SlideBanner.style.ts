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
  width: 100%;
  height: 4.4rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.BG};
  background-color: ${({ theme }) => theme.colors.key};

  overflow: hidden;
`;

export const AnimationBox = styled.div`
  display: flex;

  height: 100%;

  animation: ${infiniteSlide};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export const SlideBannerItemList = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
`;
