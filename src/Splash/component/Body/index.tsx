import { lazy, Suspense, useEffect, useState } from 'react';

import useGetNoteNum from '../../hook/useGetNoteNum';
import * as S from './Body.style';

const Lottie = lazy(() => import('lottie-react'));

function Body() {
  const [animationData, setAnimationData] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const { data } = useGetNoteNum();

  useEffect(() => {
    fetch('/lottie/lottie.json')
      .then((res) => res.json())
      .then((data) => {
        setAnimationData(data);
        setIsReady(true);
      });
  }, []);

  return (
    <S.BodyWrapper>
      <S.LottieWrapper>
        {isReady && animationData ? (
          <Suspense fallback={<S.LottieSkeleton />}>
            <Lottie animationData={animationData} />
          </Suspense>
        ) : (
          <S.LottieSkeleton />
        )}
      </S.LottieWrapper>

      <S.TextWrapper>
        <S.Text>지금까지 {data && data.data.noteNum}개의</S.Text>
        <S.Text>레큐노트가 남겨졌어요!</S.Text>
      </S.TextWrapper>
    </S.BodyWrapper>
  );
}

export default Body;
