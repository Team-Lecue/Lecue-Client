import { useEffect } from 'react';

import LoadingPage from '../../components/common/LoadingPage';
import { StepProps } from '../../Splash/page/SplashPage';
import LecueBookList from '../components/LecueBookList';
import NavigateLecueBook from '../components/NavigateLecueBook';
import useGetLecueBook from '../hooks/useGetLecueBook';
import * as S from './Home.style';

function Home({ handleStep }: StepProps) {
  const token = localStorage.getItem('token');
  const { isLoading: isLoadingLecueBook } = useGetLecueBook();

  useEffect(() => {
    handleStep(1);
  }, []);

  return isLoadingLecueBook ? (
    <LoadingPage />
  ) : (
    <S.Wrapper>
      <NavigateLecueBook />

      {token && <LecueBookList title="즐겨찾기한 레큐북" />}
      <LecueBookList title="인기 레큐북 구경하기" />
    </S.Wrapper>
  );
}

export default Home;
