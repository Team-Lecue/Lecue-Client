import Header from '../../components/common/Header';
import LecueList from '../components/LecueList';
import Nickname from '../components/Nickname';
import * as S from './Mypage.style';

function Mypage() {
  return (
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
