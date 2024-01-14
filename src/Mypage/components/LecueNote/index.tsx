import { LecueNoteProps } from '../../types/myPageType';
import * as S from './LecueNote.style';

function LecueNote(props: LecueNoteProps) {
  const {
    favoriteName,
    title,
    noteDate,
    content,
    noteTextColor,
    noteBackgroundColor,
    noteBackgroundImage,
  } = props;

  return (
    <S.Wrapper
      noteBackgroundColor={noteBackgroundColor}
      noteBackgroundImage={noteBackgroundImage}
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
