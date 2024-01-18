import Lottie from 'lottie-react';

import LottieImg from '../../../assets/lottie/lottie.json';
import * as S from './Body.style';

function Body() {
  const noteNum = 30;

  return (
    <S.BodyWrapper>
      <S.LottieWrapper>
        <Lottie animationData={LottieImg} />
      </S.LottieWrapper>

      <S.TextWrapper>
        <S.Text>지금까지 {noteNum}개의</S.Text>
        <S.Text>포스트잇이 붙여졌어요!</S.Text>
      </S.TextWrapper>
    </S.BodyWrapper>
  );
}

export default Body;
