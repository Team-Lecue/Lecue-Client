import { useEffect } from 'react';

import Body from '../../component/Body';
import Bottom from '../../component/Bottom';
import Header from '../../component/Header';
import * as S from './SplashPage.style';

export interface StepProps {
  handleStep: (newStep: number) => void;
}

function SplashPage({ handleStep }: StepProps) {
  useEffect(() => {
    handleStep(0);
  }, []);

  return (
    <S.Wrapper>
      <Header />
      <Body />
      <Bottom handleStep={handleStep} />
    </S.Wrapper>
  );
}

export default SplashPage;
