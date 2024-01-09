import { ImgKakaoLogo } from '../../../assets';
import * as S from './LequeLogo.style';

function LequeLogo() {
  return (
    <S.LogoWrapper>
      <S.Line />
      <S.Logo>
        <ImgKakaoLogo />
      </S.Logo>
    </S.LogoWrapper>
  );
}

export default LequeLogo;
