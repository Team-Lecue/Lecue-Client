import * as S from './SmallLecueNote.style';

interface SmallLecueNoteProps {
  renderType: number;
  content: string;
  noteDate: string;
  noteNickname: string;
  noteBackgroundColor: number;
}

function SmallLecueNote({
  renderType,
  content,
  noteDate,
  noteNickname,
  noteBackgroundColor,
}: SmallLecueNoteProps) {
  return (
    <S.SmallLecueNoteWrapper
      renderType={renderType}
      noteBackgroundColor={noteBackgroundColor}
    >
      <S.SmallLecueNoteNickName>{noteNickname}</S.SmallLecueNoteNickName>
      <S.SmallLecueNoteContentWrapper>
        <S.SmallLecueNoteContent>{content}</S.SmallLecueNoteContent>
      </S.SmallLecueNoteContentWrapper>
      <S.SmallLecueNoteDate>{noteDate}</S.SmallLecueNoteDate>
    </S.SmallLecueNoteWrapper>
  );
}

export default SmallLecueNote;
