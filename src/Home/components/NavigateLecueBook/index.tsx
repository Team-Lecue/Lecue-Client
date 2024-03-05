import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IcProfile, ImgLogoLecue } from '../../../assets';
import CommonModal from '../../../components/common/Modal/CommonModal';
import * as S from './NavigateLecueBook.style';

function NavigateLecueBook() {
  const navigate = useNavigate();
  const [modalOn, setModalOn] = useState(false);

  const handleClickIcProfile = () => {
    if (localStorage.getItem('token')) {
      navigate('/mypage');
    } else {
      setModalOn(true);
    }
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

      {/* 임시로 넣은 것! 추후 새로운 그래픽으로 수정 */}
      <S.DummyGraphic></S.DummyGraphic>

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
