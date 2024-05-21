import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IcProfile, ImgLogoLecue } from '../../../assets';
import CommonModal from '../../../components/common/Modal/CommonModal';
import HomeSwiper from '../HomeSwiper';
import * as S from './HomeMainBanner.style';

function NavigateLecueBook() {
  const navigate = useNavigate();
  const [modalOn, setModalOn] = useState(false);

  const isLogin = sessionStorage.getItem('token');

  const handleClickIcProfile = () => {
    navigate('/mypage');
  };

  const handleClickNavBtn = () => {
    if (isLogin) {
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

      <HomeSwiper />

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
