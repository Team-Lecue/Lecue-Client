import Body from '../../component/Body';
import Bottom from '../../component/Bottom';
import Header from '../../component/Header';
import * as S from './SplashPage.style'

function SplashPage() {
  return (
    <S.Wrapper>
      <Header />
      <Body />
      <Bottom />
    </S.Wrapper>
  );
}

export default SplashPage;
