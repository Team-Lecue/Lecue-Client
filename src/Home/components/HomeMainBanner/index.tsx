import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IcProfile, ImgLogoLecue } from '../../../assets';
import CommonModal from '../../../components/common/Modal/CommonModal';
import { illustrationArr } from '../../constants/HomeIllustArr';
import * as S from './HomeMainBanner.style';

function NavigateLecueBook() {
  const navigate = useNavigate();
  const [modalOn, setModalOn] = useState(false);

  const illustrationRef = useRef<HTMLDivElement | null>(null);
  const [illustListWidth, setIllustListWidth] = useState(0);
  const [animationListWidth, setAnimationListWidth] = useState(0);
  const [animaionDuration, setAnimationDuration] = useState(5);

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

  useEffect(() => {
    if (illustrationRef.current) {
      const itemBoxWidth = illustrationRef.current.offsetWidth;
      const itemListWidth = itemBoxWidth + 6;

      setIllustListWidth(itemListWidth);
      setAnimationListWidth(itemListWidth * 2);

      const arrLength = illustrationArr.length;
      const newAnimationDuration = Math.max(1, arrLength * 2);
      setAnimationDuration(newAnimationDuration);
    }
  }, [illustrationRef.current]);

  return (
    <S.MainWrapper>
      <S.IconWrapper>
        <ImgLogoLecue />

        <IcProfile onClick={handleClickIcProfile} />
      </S.IconWrapper>

      <S.IllustrationSliderWrapper>
        <S.IllustrationWrapper
          width={animationListWidth}
          animationDuration={animaionDuration}
        >
          {Array.from({ length: 10 }, (_, idx) => (
            <S.IllustList
              ref={illustrationRef}
              key={idx}
              width={illustListWidth}
            >
              {/* <ImgHome01 />
              <ImgHome02 />
              <ImgHome03 /> */}
              {illustrationArr.map((illustration) => illustration.img)}
            </S.IllustList>
          ))}
        </S.IllustrationWrapper>
      </S.IllustrationSliderWrapper>

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
