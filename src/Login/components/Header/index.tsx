import { ImgKakaoBook, ImgKakaoStarWhite } from '../../../assets';
import * as S from './Header.style';

function Header() {
  return (
    <S.HeaderWrapper>
      <S.Logo>
        <ImgKakaoStarWhite />
        <ImgKakaoBook />
      </S.Logo>
      <S.OrangeBlock />
    </S.HeaderWrapper>
  );
}

export default Header;
