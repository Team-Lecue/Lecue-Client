import { Outlet } from 'react-router-dom';

import * as S from './PageLayout.style';

function PageLayout() {
  return (
    <S.MyPageBodyWrapper>
      <Outlet />
    </S.MyPageBodyWrapper>
  );
}

export default PageLayout;
