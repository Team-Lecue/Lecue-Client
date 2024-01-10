import * as S from './BigLecueNote.style';

interface BigLecueNoteProps {
  content: string;
  noteDate: string;
  noteNickname: string;
  noteBackgroundColor: number;
}

function BigLecueNote({
  content,
  noteDate,
  noteNickname,
  noteBackgroundColor,
}: BigLecueNoteProps) {
  return (
    <S.BigLecueNoteWrapper noteBackgroundColor={noteBackgroundColor}>
      <S.BigLecueNoteNickname>{noteNickname}</S.BigLecueNoteNickname>
      <S.BigLecueNoteContentWrapper>
        <S.BigLecueNoteContent>{content}</S.BigLecueNoteContent>
      </S.BigLecueNoteContentWrapper>
      <S.BigLecueNoteDate>{noteDate}</S.BigLecueNoteDate>
    </S.BigLecueNoteWrapper>
  );
}

export default BigLecueNote;
