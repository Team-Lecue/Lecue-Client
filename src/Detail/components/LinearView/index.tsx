import BigLecueNote from '../BigLecueNote';
import * as S from './LinearView.style';

interface Note {
  noteId: number;
  renderType: number;
  content: string;
  noteDate: string;
  noteNickname: string;
  noteTextColor: number;
  noteBackgroundColor: number;
  noteBackgroundImage: string;
}

interface LinearViewProps {
  noteList: Note[];
}

function LinearView({ noteList }: LinearViewProps) {
  return (
    <S.LinearViewWrapper>
      {noteList.map((note) => (
        <BigLecueNote key={note.noteId} {...note} />
      ))}
    </S.LinearViewWrapper>
  );
}

export default LinearView;
