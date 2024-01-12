import Header from '../../../components/common/Header';
import CreateNote from '../../components/CreateNote';
import Footer from '../../components/Footer';
import * as S from './LecueNotePage.style';

function LecueNotePage() {
  return (
    <S.Wrapper>
      <Header headerTitle='레큐노트 작성'/>
      <CreateNote />
      <Footer />
    </S.Wrapper>
  );
}

export default LecueNotePage;
