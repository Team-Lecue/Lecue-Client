import styled from '@emotion/styled';

export const SwiperWrapper = styled.section`
  display: flex;

  .swiper {
    display: flex;
    scroll-behavior: smooth;
    transition-timing-function: linear;
  }

  .slide {
    padding-bottom: 2rem;
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
