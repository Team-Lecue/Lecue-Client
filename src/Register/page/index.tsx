import { useState } from 'react';

import NicknameInput from '../components/NicknameInput';
import RegisterLogo from '../components/RegisterLogo';
import SubmitButton from '../components/SubmitButton';
import { isValidState } from '../types/registerTypes';
import * as S from './Register.style';

function Register() {
  const [isActive, setIsActive] = useState(false);
  const [nickname, setNickname] = useState('');
  const [isValid, setIsValid] = useState<isValidState>('valid');

  const handleSetNickname = (nickname: string) => {
    setNickname(nickname);
  };

  const handleSetIsValid = (isValid: isValidState) => {
    setIsValid(isValid);
  };

  const handleSetIsActive = (isActive: boolean) => {
    setIsActive(isActive);
  };

  return (
    <S.Wrapper>
      <RegisterLogo />
      <NicknameInput
        handleSetIsActive={handleSetIsActive}
        nickname={nickname}
        handleSetNickname={handleSetNickname}
        isValid={isValid}
        handleSetIsValid={handleSetIsValid}
      />
      <SubmitButton
        isActive={isActive}
        nickname={nickname}
        handleSetIsValid={handleSetIsValid}
        isValid={isValid}
        handleSetIsActive={handleSetIsActive}
      />
    </S.Wrapper>
  );
}

export default Register;
