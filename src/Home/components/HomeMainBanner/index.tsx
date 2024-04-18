import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  IcProfile,
  ImgHome01,
  ImgHome02,
  ImgHome03,
  ImgLogoLecue,
} from '../../../assets';
import CommonModal from '../../../components/common/Modal/CommonModal';
import * as S from './HomeMainBanner.style';

function NavigateLecueBook() {
  const navigate = useNavigate();
  const [modalOn, setModalOn] = useState(false);

  const [curIdx, setCurIdx] = useState(0);
  const illustrationId = useRef(0);

  const illustrationArr = [
    {
      img: <ImgHome01 key={'ImgHome01'} />,
      key: 0,
    },
    {
      img: <ImgHome02 key={'ImgHome02'} />,
      key: 1,
    },
    {
      img: <ImgHome03 key={'ImgHome03'} />,
      key: 2,
    },
  ];

  const nextSlide = () => {
    setCurIdx(
      curIdx === 2 ? illustrationId.current=0 : illustrationId.current += 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1000);

    return () => clearInterval(interval);
  }, [illustrationId.current]);

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

      <S.IllustrationWrapper>
        {illustrationArr.map(
          (illustration) => curIdx === illustration.key && illustration.img,
        )}
      </S.IllustrationWrapper>

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
