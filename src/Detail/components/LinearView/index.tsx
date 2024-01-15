import { NoteType } from '../../type/lecueBookType';
import BigLecueNote from '../BigLecueNote';
import * as S from './LinearView.style';

interface LinearViewProps {
  noteList: NoteType[];
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
