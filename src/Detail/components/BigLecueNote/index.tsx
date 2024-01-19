import * as S from './BigLecueNote.style';

interface BigLecueNoteProps {
  content: string;
  noteDate: string;
  noteNickname: string;
  noteTextColor: string;
  noteBackground: string;
}

function BigLecueNote({
  content,
  noteDate,
  noteNickname,
  noteTextColor,
  noteBackground,
}: BigLecueNoteProps) {
  return (
    <S.BigLecueNoteWrapper
      noteBackground={noteBackground}
      noteTextColor={noteTextColor}
    >
      <S.BigLecueNoteNickname>{noteNickname}</S.BigLecueNoteNickname>
      <S.BigLecueNoteContentWrapper>
        <S.BigLecueNoteContent>{content}</S.BigLecueNoteContent>
      </S.BigLecueNoteContentWrapper>
      <S.BigLecueNoteDate>{noteDate}</S.BigLecueNoteDate>
    </S.BigLecueNoteWrapper>
  );
}

export default BigLecueNote;
