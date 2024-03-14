import { Outlet } from 'react-router-dom';

import Header from '../../components/common/Header';
import LoadingPage from '../../components/common/LoadingPage';
import useDeleteMyBook from '../hooks/useDeleteMyBook';
import useGetMyBookList from '../hooks/useGetMyBookList';
import useGetMyNickName from '../hooks/useGetMyNickname';
import useGetNoteList from '../hooks/useGetMyNoteList';
import * as S from './Mypage.style';

function Mypage() {
  const { isLoading } =
    useGetMyBookList() || useGetMyNickName() || useGetNoteList();
  const deleteMutation = useDeleteMyBook();

  return isLoading || deleteMutation.isLoading ? (
    <LoadingPage />
  ) : (
    <S.Wrapper>
      <Header headerTitle={'마이페이지'} />
      <S.MyPageBodyWrapper>
        <Outlet />
      </S.MyPageBodyWrapper>
    </S.Wrapper>
  );
}

export default Mypage;
