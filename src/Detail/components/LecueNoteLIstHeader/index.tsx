import { BtnFloatingList, BtnFloatingPostit } from '../../../assets';
import * as S from './LecueNoteListHeader.style';

interface LecueNoteListHeaderProps {
  noteNum: number;
  backgroundColor: string;
  isZigZagView: boolean;
  buttonOnClick: () => void;
  isEditable: boolean;
}

function LecueNoteListHeader({
  noteNum,
  backgroundColor,
  isZigZagView,
  buttonOnClick,
  isEditable,
}: LecueNoteListHeaderProps) {
  return (
    <S.LecueNoteListHeaderWrapper backgroundColor={backgroundColor}>
      <S.LecueNoteCountBox
        backgroundColor={backgroundColor}
      >{`${noteNum}개`}</S.LecueNoteCountBox>
      <S.LecueNoteRenderModeButton
        type="button"
        onClick={buttonOnClick}
        disabled={isEditable}
      >
        {isZigZagView ? <BtnFloatingList /> : <BtnFloatingPostit />}
      </S.LecueNoteRenderModeButton>
    </S.LecueNoteListHeaderWrapper>
  );
}

export default LecueNoteListHeader;
