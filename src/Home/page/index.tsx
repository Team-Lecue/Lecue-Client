import { useEffect } from 'react';

import { StepProps } from '../../Splash/page/SplashPage';
import LecueBookList from '../components/LecueBookList';
import NavigateLecueBook from '../components/NavigateLecueBook';
import * as S from './Home.style';

function Home({ handleStep }: StepProps) {
  useEffect(() => {
    handleStep(1);
  }, []);

  return (
    <S.Wrapper>
      <NavigateLecueBook />
      <LecueBookList />
    </S.Wrapper>
  );
}

export default Home;
