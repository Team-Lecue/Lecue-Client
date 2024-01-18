import { useEffect } from 'react';

import LoadingPage from '../../components/common/LoadingPage';
import { StepProps } from '../../Splash/page/SplashPage';
import LecueBookList from '../components/LecueBookList';
import NavigateLecueBook from '../components/NavigateLecueBook';
import useGetLecueBook from '../hooks/useGetLecueBook';
import * as S from './Home.style';

function Home({ handleStep }: StepProps) {
  const { isLoading } = useGetLecueBook();

  useEffect(() => {
    handleStep(1);
  }, []);

  return isLoading ? (
    <LoadingPage />
  ) : (
    <S.Wrapper>
      <NavigateLecueBook />
      <LecueBookList />
    </S.Wrapper>
  );
}

export default Home;
