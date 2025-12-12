import { lazy, Suspense, useEffect, useState } from 'react';

import useGetNoteNum from '../../hook/useGetNoteNum';
import * as S from './Body.style';

const Lottie = lazy(() => import('lottie-react'));

function Body() {
  const { data } = useGetNoteNum();
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/lottie/lottie.json')
      .then((res) => res.json())
      .then(setAnimationData);
  }, []);

  return (
    <S.BodyWrapper>
      <S.LottieWrapper>
        <Suspense fallback={<div style={{ width: '100%', height: '100%' }} />}>
          {animationData && <Lottie animationData={animationData} />}
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
