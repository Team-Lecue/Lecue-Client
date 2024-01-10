import SelectColor from '../SelectColor';
import WriteNote from '../WriteNote';
import * as S from './CreateNote.style';

function CreateNote() {
  return (
    <S.Wrapper>
      <WriteNote />
      <SelectColor />
    </S.Wrapper>
  );
}

export default CreateNote;
