import { Outlet } from 'react-router-dom';

import * as S from './Mypage.style';

function Mypage() {
  return (
    <S.Wrapper>
      <Outlet />
    </S.Wrapper>
  );
}

export default Mypage;
