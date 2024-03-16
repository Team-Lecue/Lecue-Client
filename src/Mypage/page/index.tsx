import Header from '../../components/common/Header';
import PageLayout from '../components/PageLayout';
import * as S from './Mypage.style';

function Mypage() {
  return (
    <S.Wrapper>
      <Header headerTitle={'마이페이지'} />
      <PageLayout />
    </S.Wrapper>
  );
}

export default Mypage;
