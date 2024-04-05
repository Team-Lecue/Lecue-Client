import Lottie from 'lottie-react';

import LottieImg from '../../../assets/lottie/lottie.json';
import useGetNoteNum from '../../hook/useGetNoteNum';
import * as S from './Body.style';

function Body() {
  const { data } = useGetNoteNum();

  return (
    <S.BodyWrapper>
      <S.LottieWrapper>
        <Lottie animationData={LottieImg} />
      </S.LottieWrapper>

      <S.TextWrapper>
        <S.Text>지금까지 {data && data.data.noteNum}개의</S.Text>
        <S.Text>레터가 남겨졌어요!</S.Text>
      </S.TextWrapper>
    </S.BodyWrapper>
  );
}

export default Body;
