// import { useEffect } from 'react';

import LoadingPage from '../../../components/common/LoadingPage';
import Body from '../../component/Body';
import Bottom from '../../component/Bottom';
import Header from '../../component/Header';
import useGetNoteNum from '../../hook/useGetNoteNum';
import * as S from './SplashPage.style';

export interface StepProps {
  handleStep: (newStep: number) => void;
}

function SplashPage({ handleStep }: StepProps) {
  const { isLoading } = useGetNoteNum();

  return (
    <S.Wrapper>
      {isLoading && <LoadingPage />}
      <Header />
      <Body />
      <Bottom handleStep={handleStep} />
    </S.Wrapper>
  );
}

export default SplashPage;
