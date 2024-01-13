import { WriteNoteProps } from '../../type/lecueNoteType';
import * as S from './WriteNote.style';

function WriteNote({ clickedBgColor, clickedTextColor }: WriteNoteProps) {
  const nickname = '와라라라랄라';

  return (
    <S.Wrapper>
      <S.LecueNote $bgColor={clickedBgColor}>
        <S.Nickname>{nickname}</S.Nickname>
        <S.Contents $textColor={clickedTextColor} />
        <S.BottomContentsWrapper>
          <S.Date>2020.10.23</S.Date>
          <S.Counter>(1/1000)</S.Counter>
        </S.BottomContentsWrapper>
      </S.LecueNote>
      <S.Notice>*욕설/비속어는 자동 필터링됩니다.</S.Notice>
    </S.Wrapper>
  );
}

export default WriteNote;
