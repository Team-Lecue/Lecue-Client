import { useState } from 'react';

import * as S from './LecueList.style';

function LecueList() {
  const [clickedBtn, setClickedBtn] = useState(true);

  const handleClickBtn = (prev: boolean) => {
    setClickedBtn(!prev);
  };

  return (
    <S.Wrapper>
      <S.ButtonWrapper>
        <S.Button
          type="button"
          clickedBtn={clickedBtn}
          onClick={() => handleClickBtn(clickedBtn)}
        >
          레큐노트 (+999개)
        </S.Button>
        <S.Button
          type="button"
          clickedBtn={!clickedBtn}
          onClick={() => handleClickBtn(clickedBtn)}
        >
          레큐북 (0개)
        </S.Button>
      </S.ButtonWrapper>

      <S.ListWrapper clickedBtn={clickedBtn}></S.ListWrapper>
    </S.Wrapper>
  );
}

export default LecueList;
