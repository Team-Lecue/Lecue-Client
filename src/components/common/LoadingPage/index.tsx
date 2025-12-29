import LoadingSpinner from '../LoadingSpinner';
import * as S from './LoadingPage.style';

function LoadingPage() {
  return (
    <S.LoadingPageWrapper>
      <S.LoadingPageItemContainer>
        <LoadingSpinner />
        <S.LoadingPageTextWrapper>
          <S.LoadingText>로딩 중</S.LoadingText>
          <S.WaitText>잠시만 기다려주세요</S.WaitText>
        </S.LoadingPageTextWrapper>
      </S.LoadingPageItemContainer>
    </S.LoadingPageWrapper>
  );
}

export default LoadingPage;
