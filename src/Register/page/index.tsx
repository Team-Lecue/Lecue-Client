import NicknameInput from '../components/NicknameInput';
import RegisterLogo from '../components/RegisterLogo';
import * as S from './Register.style';

function Register() {
  return (
    <S.Wrapper>
      <RegisterLogo />
      <NicknameInput />
    </S.Wrapper>
  );
}

export default Register;
