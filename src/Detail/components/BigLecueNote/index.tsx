import * as S from './BigLecueNote.style';

interface BigLecueNoteProps {
  content: string;
  noteDate: string;
  noteNickname: string;
  noteTextColor: number;
  noteBackgroundColor: number;
  noteBackgroundImage: string;
}

function BigLecueNote({
  content,
  noteDate,
  noteNickname,
  noteTextColor,
  noteBackgroundColor,
  noteBackgroundImage,
}: BigLecueNoteProps) {
  return (
    <S.BigLecueNoteWrapper
      noteBackgroundColor={noteBackgroundColor}
      noteBackgroundImage={noteBackgroundImage}
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
