import { lazy, Suspense, useEffect, useState } from 'react';

import useGetNoteNum from '../../hook/useGetNoteNum';
import * as S from './Body.style';

const Lottie = lazy(() => import('lottie-react'));

function Body() {
  const { data } = useGetNoteNum();
  const [lottieData, setLottieData] = useState(null);

  useEffect(() => {
    import('../../../assets/lottie/lottie.json')
      .then((module) => setLottieData(module.default)) // module.default를 사용하여 JSON 데이터를 가져옴
      .catch((err) => console.error('Failed to load Lottie animation', err));
  }, []);

  return (
    <S.BodyWrapper>
      <S.LottieWrapper>
        <Suspense fallback={<div>로딩</div>}>
          {lottieData && <Lottie animationData={lottieData} />}
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
