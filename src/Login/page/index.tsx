import Comment from '../components/Comment';
import Header from '../components/Header';
import LecueLogo from '../components/LecueLogo';
import LoginBtnContainer from '../components/LoginBtnContainer';
import * as S from './Login.style';

function Login() {
  window.localStorage.clear();
  const ref = document.referrer;
  sessionStorage.setItem('url', ref);

  return (
    <S.LoginWrapper>
      <Header />
      <LecueLogo />
      <Comment />
      <LoginBtnContainer />
    </S.LoginWrapper>
  );
}

export default Login;
