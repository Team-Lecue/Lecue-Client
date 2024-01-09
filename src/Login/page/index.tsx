import Header from '../components/Header';
import LecueExplain from '../components/LecueExplain';
import * as S from './Login.style';

function Login() {
  return (
    <S.LoginWrapper>
      <Header />
      <LecueExplain />
    </S.LoginWrapper>
  );
}

export default Login;
