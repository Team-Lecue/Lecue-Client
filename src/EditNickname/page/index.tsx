import React from 'react';

import Header from '../../components/common/Header';
import { EditNicknameBodyWrapper } from './EditNickname.style';

function EditNickname() {
  return (
    <React.Fragment>
      <Header headerTitle="닉네임 수정" />
      <EditNicknameBodyWrapper></EditNicknameBodyWrapper>
    </React.Fragment>
  );
}

export default EditNickname;
