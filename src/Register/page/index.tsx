import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import NicknameInput from '../components/NicknameInput';
import RegisterLogo from '../components/RegisterLogo';
import SubmitButton from '../components/SubmitButton';
import * as S from './Register.style';

export type isValidState = 'valid' | 'special' | 'duplicate';

function Register() {
  const [isActive, setIsActive] = useState(false);
  const [nickname, setNickname] = useState('');
  const [isValid, setIsValid] = useState<isValidState>('valid');

  const location = useLocation();

  const { token } = location.state && location.state;

  return (
    <S.Wrapper>
      <RegisterLogo />
      <NicknameInput
        setIsActive={setIsActive}
        nickname={nickname}
        setNickname={setNickname}
        isValid={isValid}
        setIsValid={setIsValid}
      />
      <SubmitButton
        isActive={isActive}
        nickname={nickname}
        token={token}
        setIsValid={setIsValid}
        setIsActive={setIsActive}
      />
    </S.Wrapper>
  );
}

export default Register;
