import { BtnFloatingList, BtnFloatingPostit } from '../../../assets';
import * as S from './LecueNoteListHeader.style';

interface LecueNoteListHeaderProps {
  noteNum: number;
  backgroundColor: number;
  isZigZagView: boolean;
  buttonOnClick: () => void;
}

function LecueNoteListHeader({
  noteNum,
  backgroundColor,
  isZigZagView,
  buttonOnClick,
}: LecueNoteListHeaderProps) {
  return (
    <S.LecueNoteListHeaderWrapper>
      <S.LecueNoteCountBox
        backgroundColor={backgroundColor}
      >{`${noteNum}개`}</S.LecueNoteCountBox>
      <S.LecueNoteRenderModeButton onClick={buttonOnClick}>
        {isZigZagView ? <BtnFloatingList /> : <BtnFloatingPostit />}
      </S.LecueNoteRenderModeButton>
    </S.LecueNoteListHeaderWrapper>
  );
}

export default LecueNoteListHeader;
