import { BtnKakaologin, ImgKakaoStarOrange } from '../../../assets';
import * as S from './LoginBtnContainer.style';

function LoginBtnContainer() {
  const handleClickLoginBtn = () => {
    //로그인 버튼 클릭 시 이벤트
    alert('로그인 버튼 클릭');
  };

  return (
    <S.LoginBtnWrapper>
      <S.TextWrapper>
        <ImgKakaoStarOrange />
        <S.Text>소중한 마음을 전달해보세요!</S.Text>
        <ImgKakaoStarOrange />
      </S.TextWrapper>
      <button onClick={handleClickLoginBtn}>
        <BtnKakaologin />
      </button>
    </S.LoginBtnWrapper>
  );
}

export default LoginBtnContainer;
