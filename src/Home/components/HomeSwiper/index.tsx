import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { illustrationArr } from '../../constants/HomeIllustArr';
import * as S from './HomeSwiper.style';

const HomeSwiper = () => {
  return (
    <S.SwiperWrapper>
      <Swiper
        slidesPerView={1}
        mousewheel={true}
        spaceBetween={10}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
      >
        {illustrationArr.map((illustration) => {
          return (
            <SwiperSlide key={illustration.key}>
              <S.InnerSlider>{illustration.img}</S.InnerSlider>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </S.SwiperWrapper>
  );
};

export default HomeSwiper;
