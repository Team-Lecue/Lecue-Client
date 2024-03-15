import { useEffect } from 'react';

import LoadingPage from '../../components/common/LoadingPage';
import { StepProps } from '../../Splash/page/SplashPage';
import LecueBookList from '../components/LecueBookList';
import NavigateLecueBook from '../components/NavigateLecueBook';
import useGetFavorite from '../hooks/useGetFavorite';
import useGetLecueBook from '../hooks/useGetLecueBook';
import * as S from './Home.style';

function Home({ handleStep }: StepProps) {
  const token = localStorage.getItem('token');
  const { isLoading: isLoadingLecueBook, data: lecueBook } = useGetLecueBook();
  const { isLoading: isLoadingFavorite, data: favorite } = useGetFavorite();

  useEffect(() => {
    handleStep(1);
  }, []);

  return isLoadingLecueBook || isLoadingFavorite ? (
    <LoadingPage />
  ) : (
    <S.Wrapper>
      <NavigateLecueBook />

      {token && (
        <LecueBookList title="즐겨찾기한 레큐북" data={favorite.data} />
      )}
      <LecueBookList title="인기 레큐북 구경하기" data={lecueBook.data} />
    </S.Wrapper>
  );
}

export default Home;
