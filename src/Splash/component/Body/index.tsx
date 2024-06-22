import { lazy, Suspense, useEffect, useState } from 'react';

import useGetNoteNum from '../../hook/useGetNoteNum';
import * as S from './Body.style';

const Lottie = lazy(() => import('lottie-react'));

interface LottieMeta {
  g: string;
  a: string;
  k: string;
  d: string;
  tc: string;
}

interface LottieAsset {
  id: string;
  w: number;
  h: number;
  u: string;
  p: string;
  e: number;
}

interface LottieAnimationData {
  v: string;
  meta: LottieMeta;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: LottieAsset[];
}

function Body() {
  const { data } = useGetNoteNum();
  const [lottieData, setLottieData] = useState<LottieAnimationData | null>(
    null,
  );

  useEffect(() => {
    // Lottie 애니메이션 데이터를 동적으로 import
    import('../../../assets/lottie/lottie.json')
      .then((module) => setLottieData(module.default as LottieAnimationData)) // module.default를 사용하여 JSON 데이터를 가져옴
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
