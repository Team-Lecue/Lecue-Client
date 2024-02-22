import Lottie from 'lottie-react';
import { useEffect } from 'react';

import animationData from '../../../../../src/assets/lottie/spiner 120.json';
import * as S from './NoteLoading.style';

interface NoteLoadingProps {
  handleResetPrevImg: () => void;
}
const NoteLoading = ({ handleResetPrevImg }: NoteLoadingProps) => {
  useEffect(() => {
    handleResetPrevImg();
  }, []);

  return (
    <S.LoadingWrapper>
      <S.LottieWrapper>
        <Lottie animationData={animationData} />
      </S.LottieWrapper>
    </S.LoadingWrapper>
  );
};

export default NoteLoading;
