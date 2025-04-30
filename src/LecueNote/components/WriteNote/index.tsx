import GraphemeSplitter from 'grapheme-splitter';
import { useEffect, useState } from 'react';

import { WriteNoteProps } from '../../type/lecueNoteType';
import NoteLoading from './NoteLoading';
import * as S from './WriteNote.style';

function WriteNote({
  isLoading,
  lecueNoteState,
  imgFile,
  isIconClicked,
  contents,
  handleChangeFn,
  handleResetPrevImg,
}: WriteNoteProps) {
  const nickname = sessionStorage.getItem('nickname');
  const { textColor, background } = lecueNoteState;

  // 이모지 글자 수 세기 관련 라이브러리
  const split = new GraphemeSplitter();
  const today = new Date();
  const [dateArr, setDateArr] = useState([0, 0, 0]);

  useEffect(() => {
    setDateArr([today.getFullYear(), today.getMonth() + 1, today.getDate()]);
  }, [today.getDate()]);

  return (
    <S.Wrapper>
      <S.LecueNote
        $bgColor={background}
        $isIconClicked={isIconClicked}
        $imgFile={imgFile}
      >
        {isLoading && <NoteLoading handleResetPrevImg={handleResetPrevImg} />}

        <S.Nickname $textColor={textColor}>{nickname}</S.Nickname>
        <S.Contents
          $textColor={textColor}
          onChange={handleChangeFn}
          placeholder="최애에게 마음을 표현해보세요"
        />
        <S.BottomContentsWrapper>
          <S.Date>
            {dateArr[0]}.{dateArr[1]}.{dateArr[2]}
          </S.Date>
          <S.Counter>({split.splitGraphemes(contents).length}/1000)</S.Counter>
        </S.BottomContentsWrapper>
      </S.LecueNote>
      <S.Notice>*욕설/비속어는 자동 필터링됩니다.</S.Notice>
    </S.Wrapper>
  );
}

export default WriteNote;
