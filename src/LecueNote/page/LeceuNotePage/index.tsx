import { useState } from 'react';

import Header from '../../../components/common/Header';
import CreateNote from '../../components/CreateNote';
import Footer from '../../components/Footer';
import * as S from './LecueNotePage.style';

function LecueNotePage() {
  const MAX_LENGTH = 1000;
  const [contents, setContents] = useState('');

  const handleChangeContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
    if (e.target.value.length > MAX_LENGTH) {
      setContents((e.target.value = e.target.value.substring(0, 1000)));
    }
  };

  return (
    <S.Wrapper>
      <Header headerTitle="레큐노트 작성" />
      <CreateNote contents={contents} handleChangeFn={handleChangeContents} />
      <Footer contents={contents} />
    </S.Wrapper>
  );
}

export default LecueNotePage;
