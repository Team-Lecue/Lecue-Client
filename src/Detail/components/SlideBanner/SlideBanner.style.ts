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
  background-color: ${({ theme }) => theme.colors.key};
  overflow: hidden;
`;

export const AnimationBox = styled.div`
  height: 100%;
  display: flex;
  animation: ${infiniteSlide};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export const SlideBannerItemList = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  /* column-gap: 0.6rem; */
  font-size: 24px;
`;
