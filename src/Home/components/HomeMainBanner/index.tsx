import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IcProfile, ImgLogoLecue } from '../../../assets';
import CommonModal from '../../../components/common/Modal/CommonModal';
import { illustrationArr } from '../../constants/HomeIllustArr';
import * as S from './HomeMainBanner.style';

function NavigateLecueBook() {
  const navigate = useNavigate();
  const [modalOn, setModalOn] = useState(false);

  const handleClickIcProfile = () => {
    const token = localStorage.getItem('token');

    navigate('/mypage', { state: token });
  };

  const handleClickNavBtn = () => {
    if (localStorage.getItem('token')) {
      navigate('/target');
    } else {
      setModalOn(true);
    }
  };

  return (
    <S.MainWrapper>
      <S.IconWrapper>
        <ImgLogoLecue />

        <IcProfile onClick={handleClickIcProfile} />
      </S.IconWrapper>

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

      <S.Button type="button" onClick={handleClickNavBtn}>
        레큐북 만들기
      </S.Button>

      {modalOn && (
        <CommonModal
          category="login"
          setModalOn={setModalOn}
          handleFn={() => navigate('/login')}
        />
      )}
    </S.MainWrapper>
  );
}

export default NavigateLecueBook;
