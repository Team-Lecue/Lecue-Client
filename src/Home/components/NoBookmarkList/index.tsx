import { useNavigate } from 'react-router';

import * as S from './NoBookmarkList.style';

const NoBookmarkList = () => {
  const navigate = useNavigate();

  const handleClickNavigateBtn = () => {
    navigate('/mypage/history', { state: 2 });
  };

  return (
    <S.ListWrapper>
      <S.DescriptionWrapper>
        <S.Description>아직 즐겨찾기한 레큐북이 없어요.</S.Description>
        <S.Description>
          자주 보고 싶은 레큐북을 즐겨찾기 해보세요.
        </S.Description>
      </S.DescriptionWrapper>

      <S.NavigateBtn type="button" onClick={handleClickNavigateBtn}>
        레큐북 보러가기
      </S.NavigateBtn>
    </S.ListWrapper>
  );
};

export default NoBookmarkList;
