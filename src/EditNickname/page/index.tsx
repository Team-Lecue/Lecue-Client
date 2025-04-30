import React, { useEffect, useState } from 'react';

import Header from '../../components/common/Header';
import EditButton from '../components/EditButton';
import NicknameInput from '../components/NicknameInput';
import { isValidState } from '../types/editNicknameTypes';
import * as S from './EditNickname.style';

function EditNickname() {
  const [isActive, setIsActive] = useState(false);
  const [nickname, setNickname] = useState(
    sessionStorage.getItem('nickname') || '',
  );
  const [isValid, setIsValid] = useState<isValidState>('enter');

  const handleSetNickname = (nickname: string) => {
    setNickname(nickname);
  };

  const handleSetIsValid = (isValid: isValidState) => {
    setIsValid(isValid);
  };

  const handleSetIsActive = (isActive: boolean) => {
    setIsActive(isActive);
  };

  useEffect(() => {
    isValid === 'valid' ? handleSetIsActive(true) : handleSetIsActive(false);
  }, [isValid]);

  return (
    <React.Fragment>
      <Header headerTitle="닉네임 수정" />
      <S.EditNicknameBodyWrapper>
        <S.NicknameInputSection>
          <S.NicknameInputSectionTitle>나의 닉네임</S.NicknameInputSectionTitle>
          <NicknameInput
            handleSetIsActive={handleSetIsActive}
            nickname={nickname}
            handleSetNickname={handleSetNickname}
            isValid={isValid}
            handleSetIsValid={handleSetIsValid}
          />
        </S.NicknameInputSection>
        <EditButton
          isActive={isActive}
          nickname={nickname}
          handleSetIsValid={handleSetIsValid}
          isValid={isValid}
          handleSetIsActive={handleSetIsActive}
        />
      </S.EditNicknameBodyWrapper>
    </React.Fragment>
  );
}

export default EditNickname;
