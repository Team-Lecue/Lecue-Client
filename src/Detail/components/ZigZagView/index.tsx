import SmallLecueNote from '../SmallLecueNote';
import * as S from './ZigZagView.style';

interface Note {
  noteId: number;
  renderType: number;
  content: string;
  noteDate: string;
  noteNickname: string;
  noteBackgroundColor: number;
  noteBackgroundImage: string;
}

interface ZigZagViewProps {
  noteList: Note[];
}

function ZigZagView({ noteList }: ZigZagViewProps) {
  return (
    <S.ZigZagViewWrapper>
      {noteList.map((note) => (
        <S.LecueNoteContainer key={note.noteId}>
          <SmallLecueNote {...note} noteList={noteList} />
        </S.LecueNoteContainer>
      ))}
    </S.ZigZagViewWrapper>
  );
}

export default ZigZagView;
