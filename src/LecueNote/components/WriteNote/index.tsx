import { useEffect, useState } from 'react';

import { WriteNoteProps } from '../../type/lecueNoteType';
import * as S from './WriteNote.style';

function WriteNote({
  clickedBgColor,
  clickedTextColor,
  contents,
  handleChangeFn,
}: WriteNoteProps) {
  const nickname = '와라라라랄라';

  const today = new Date();
  const [dateArr, setDateArr] = useState([0, 0, 0]);

  useEffect(() => {
    setDateArr([today.getFullYear(), today.getMonth() + 1, today.getDate()]);
  }, [today.getDate()]);

  return (
    <S.Wrapper>
      <S.LecueNote $bgColor={clickedBgColor}>
        <S.Nickname>{nickname}</S.Nickname>
        <S.Contents $textColor={clickedTextColor} onChange={handleChangeFn} />
        <S.BottomContentsWrapper>
          <S.Date>
            {dateArr[0]}.{dateArr[1]}.{dateArr[2]}
          </S.Date>
          <S.Counter>({contents.length}/1000)</S.Counter>
        </S.BottomContentsWrapper>
      </S.LecueNote>
      <S.Notice>*욕설/비속어는 자동 필터링됩니다.</S.Notice>
    </S.Wrapper>
  );
}

export default WriteNote;
