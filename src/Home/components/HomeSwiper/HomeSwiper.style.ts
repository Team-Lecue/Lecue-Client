import styled from '@emotion/styled';

export const SwiperWrapper = styled.section`
  display: flex;

  .swiper {
    display: flex;
    scroll-behavior: smooth;
    transition-timing-function: linear;
  }

  .swiper-slide:not(.swiper-slide-active) {
    opacity: 0.5;
  }

  .swiper-pagination {
    bottom: 0;
  }

  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.colors.LG};
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.DG};
  }
`;

export const InnerSlider = styled.div`
  padding-bottom: 2rem;
`;
