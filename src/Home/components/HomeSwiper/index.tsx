import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import { Autoplay, EffectCreative, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { illustrationArr } from '../../constants/HomeIllustArr';
import * as S from './HomeSwiper.style';

const HomeSwiper = () => {
  return (
    <S.SwiperWrapper>
      <Swiper
        slidesPerView={1}
        mousewheel={true}
        autoplay={{ delay: 1700, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay, Pagination, EffectCreative]}
        pagination={{ clickable: true }}
        effect={'creative'}
        creativeEffect={{
          prev: {
            translate: ['-20%', 0, -50],
            opacity: 0.8,
          },
          next: {
            translate: ['80%', 0, 0],
            opacity: 0.8,
          },
        }}
      >
        {illustrationArr.map((illustration) => {
          return (
            <SwiperSlide key={illustration.key}>
              <div className="slide">{illustration.img}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </S.SwiperWrapper>
  );
};

export default HomeSwiper;
