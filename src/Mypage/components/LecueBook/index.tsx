import { IcWaste } from '../../../assets';
import { LecueBookProps } from '../../types/myPageType';
import * as S from './LecueBook.style';

function LecueBook(props: LecueBookProps) {
  const { favoriteName, title, bookDate, noteNum } = props;

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
        <S.Count>{noteNum}개</S.Count>
      </S.Footer>
    </S.Wrapper>
  );
}

export default LecueBook;
