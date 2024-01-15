import { LecueNoteProps } from '../../types/myPageType';
import * as S from './LecueNote.style';

function LecueNote(props: LecueNoteProps) {
  const {
    noteId,
    favoriteName,
    title,
    noteDate,
    content,
    noteTextColor,
    noteBackgroundColor,
    noteBackgroundImage,
  } = props;

  const handleClickNote = (noteId: number) => {
    alert(`${noteId}가 선택되었습니다.`);
  };

  return (
    <S.Wrapper
      noteBackgroundColor={noteBackgroundColor}
      noteBackgroundImage={noteBackgroundImage}
      onClick={() => {
        handleClickNote(noteId);
      }}
    >
      <S.TextWrapper noteTextColor={noteTextColor}>
        <S.Name>{favoriteName}</S.Name>
        <S.Title>{title}</S.Title>
        <S.Content>{content}</S.Content>
      </S.TextWrapper>
      <S.Date>{noteDate}</S.Date>
    </S.Wrapper>
  );
}

export default LecueNote;
