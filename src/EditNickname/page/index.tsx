import React, { useState } from 'react';

import Header from '../../components/common/Header';
import NicknameInput from '../components/NicknameInput';
import * as S from './EditNickname.style';

function EditNickname() {
  const [nickname, setNickname] = useState('테스트테스트');

  return (
    <React.Fragment>
      <Header headerTitle="닉네임 수정" />
      <S.EditNicknameBodyWrapper>
        <S.NicknameInputSection>
          <S.NicknameInputSectionTitle>나의 닉네임</S.NicknameInputSectionTitle>
          <NicknameInput
            nickname={nickname}
            changeNickname={(nickname: string) => setNickname(nickname)}
          />
        </S.NicknameInputSection>
      </S.EditNicknameBodyWrapper>
    </React.Fragment>
  );
}

export default EditNickname;
