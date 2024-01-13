import { useState } from 'react';

import NicknameInput from '../components/NicknameInput';
import RegisterLogo from '../components/RegisterLogo';
import SubmitButton from '../components/SubmitButton';
import * as S from './Register.style';

function Register() {
  const [isActive, setIsActive] = useState(false);

  return (
    <S.Wrapper>
      <RegisterLogo />
      <NicknameInput setIsActive={setIsActive} />
      <SubmitButton isActive={isActive} />
    </S.Wrapper>
  );
}

export default Register;
