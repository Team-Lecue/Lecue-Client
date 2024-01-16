import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import NicknameInput from '../components/NicknameInput';
import RegisterLogo from '../components/RegisterLogo';
import SubmitButton from '../components/SubmitButton';
import * as S from './Register.style';

function Register() {
  const [isActive, setIsActive] = useState(false);
  const [nickname, setNickname] = useState('');
  const location = useLocation();

  const { token } = location.state || null;

  return (
    <S.Wrapper>
      <RegisterLogo />
      <NicknameInput
        setIsActive={setIsActive}
        nickname={nickname}
        setNickname={setNickname}
      />
      <SubmitButton isActive={isActive} nickname={nickname} token={token} />
    </S.Wrapper>
  );
}

export default Register;
