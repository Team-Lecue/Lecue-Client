import { useEffect } from 'react';

import { NoteType } from '../../type/lecueBookType';
import BigLecueNote from '../BigLecueNote';
import * as S from './LinearView.style';

interface LinearViewProps {
  noteList: NoteType[];
}

function LinearView({ noteList }: LinearViewProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.LinearViewWrapper>
      {noteList.map((note) => (
        <BigLecueNote key={note.noteId} {...note} />
      ))}
    </S.LinearViewWrapper>
  );
}

export default LinearView;
