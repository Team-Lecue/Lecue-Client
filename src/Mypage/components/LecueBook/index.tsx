import { useEffect, useState } from 'react';

import { IcWaste } from '../../../assets';
import { LecueBookProps } from '../../types/myPageType';
import * as S from './LecueBook.style';

function LecueBook(props: LecueBookProps) {
  const [noteCount, setNoteCount] = useState('');
  const { favoriteName, title, bookDate, noteNum } = props;

  const convertNoteCount = (noteNum: number) => {
    setNoteCount(noteNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
  };

  useEffect(() => {
    convertNoteCount(noteNum);
  });

  return (
    <S.Wrapper>
      <S.Header>
        <S.Name>{favoriteName}</S.Name>
        <S.TrashBtn>
          <IcWaste />
        </S.TrashBtn>
      </S.Header>
      <S.Title>{title}</S.Title>
      <S.Footer>
        <S.Date>{bookDate}</S.Date>
        <S.Count>{noteCount}개</S.Count>
      </S.Footer>
    </S.Wrapper>
  );
}

export default LecueBook;
