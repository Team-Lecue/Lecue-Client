import { lazy, Suspense } from 'react';

import LottieImg from '../../../assets/lottie/lottie.json';
import LoadingImg from '../../../assets/lottie/spiner 120.json';
import useGetNoteNum from '../../hook/useGetNoteNum';
import * as S from './Body.style';

const Lottie = lazy(() => import('lottie-react'));

function Body() {
  const { data } = useGetNoteNum();

  return (
    <S.BodyWrapper>
      <S.LottieWrapper>
        <Suspense fallback={<Lottie animationData={LoadingImg} />}>
          <Lottie animationData={LottieImg} />
        </Suspense>
      </S.LottieWrapper>

      <S.TextWrapper>
        <S.Text>지금까지 {data && data.data.noteNum}개의</S.Text>
        <S.Text>레큐노트가 남겨졌어요!</S.Text>
      </S.TextWrapper>
    </S.BodyWrapper>
  );
}

export default Body;
