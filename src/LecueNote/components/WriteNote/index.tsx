import { WriteNoteProps } from '../../type/lecueNoteType';
import * as S from './WriteNote.style';

function WriteNote({ clickedBgColor }: WriteNoteProps) {
  return (
    <S.Wrapper>
      <S.LecueNote $bgColor={clickedBgColor}></S.LecueNote>
      <S.Notice>*욕설/비속어는 자동 필터링됩니다.</S.Notice>
    </S.Wrapper>
  );
}

export default WriteNote;
