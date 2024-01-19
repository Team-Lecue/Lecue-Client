import Header from '../../components/common/Header';
import LoadingPage from '../../components/common/LoadingPage';
import LecueList from '../components/LecueList';
import Nickname from '../components/Nickname';
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
      <Header headerTitle={'내 기록'} />
      <S.InfoWrapper>
        <Nickname />
      </S.InfoWrapper>
      <S.ListWrapper>
        <LecueList />
      </S.ListWrapper>
    </S.Wrapper>
  );
}

export default Mypage;
