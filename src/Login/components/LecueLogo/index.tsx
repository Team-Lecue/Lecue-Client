import { ImgKakaoLogo } from '../../../assets';
import * as S from './LecueLogo.style';

function LecueLogo() {
  return (
    <S.LogoWrapper>
      <S.Line />
      <S.Logo>
        <ImgKakaoLogo />
      </S.Logo>
    </S.LogoWrapper>
  );
}

export default LecueLogo;
