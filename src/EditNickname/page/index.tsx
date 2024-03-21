import React from 'react';

import Header from '../../components/common/Header';
import * as S from './EditNickname.style';

function EditNickname() {
  return (
    <React.Fragment>
      <Header headerTitle="닉네임 수정" />
      <S.EditNicknameBodyWrapper></S.EditNicknameBodyWrapper>
    </React.Fragment>
  );
}
export default EditNickname;
