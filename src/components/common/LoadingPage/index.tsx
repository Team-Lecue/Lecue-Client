import Lottie from 'lottie-react';

import animationData from '../../../assets/lottie/spiner 120.json';
import * as S from './LoadingPage.style';

function LoadingPage() {
  return (
    <S.LoadingPageWrapper>
      <S.LoadingPageItemContainer>
        <S.LottieWrapper>
          <Lottie animationData={animationData} />
        </S.LottieWrapper>
        <S.LoadingPageTextWrapper>
          <S.LoadingText>로딩 중</S.LoadingText>
          <S.WaitText>잠시만 기다려주세요</S.WaitText>
        </S.LoadingPageTextWrapper>
      </S.LoadingPageItemContainer>
    </S.LoadingPageWrapper>
  );
}

export default LoadingPage;
