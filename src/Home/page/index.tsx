import { useEffect } from 'react';

import LoadingPage from '../../components/common/LoadingPage';
import { StepProps } from '../../Splash/page/SplashPage';
import HomeMainBanner from '../components/HomeMainBanner';
import LecueBookList from '../components/LecueBookList';
import useGetLecueBook from '../hooks/useGetLecueBook';
import * as S from './Home.style';

function Home({ handleStep }: StepProps) {
  const { isLoading: isLoadingLecueBook } = useGetLecueBook();

  const isLogin = sessionStorage.getItem('token');

  useEffect(() => {
    handleStep(1);
  }, []);

  return isLoadingLecueBook ? (
    <LoadingPage />
  ) : (
    <S.Wrapper>
      <HomeMainBanner />

      {isLogin && <LecueBookList title="즐겨찾기한 레큐북" />}
      <LecueBookList title="인기 레큐북 구경하기" />
    </S.Wrapper>
  );
}

export default Home;
