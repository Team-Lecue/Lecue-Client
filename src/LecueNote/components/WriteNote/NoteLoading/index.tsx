import Lottie from 'lottie-react';

import animationData from '../../../../../src/assets/lottie/spiner 120.json';
import * as S from './NoteLoading.style';

const NoteLoading = () => {
  return (
    <S.LoadingWrapper>
      <S.LottieWrapper>
        <Lottie animationData={animationData} />
      </S.LottieWrapper>
    </S.LoadingWrapper>
  );
};

export default NoteLoading;
