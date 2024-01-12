import { IcWaste } from '../../../assets';
import * as S from './LecueBook.style';
function LecueBook() {
  return (
    <S.Wrapper>
      <S.Header>
        {/* <p>{favoriteName}</p> */}
        <S.Name>Lecue</S.Name>
        <S.TrashBtn>
          <IcWaste />
        </S.TrashBtn>
      </S.Header>
      {/* <p>{title}</p> */}
      <S.Title>레큐의 탄생을 축하해!</S.Title>
      <S.Footer>
        {/* <p>{bookDate}</p> */}
        <S.Date>2024.01.12</S.Date>
        {/* <p>{noteNum}</p> */}
        <S.Count>28760개</S.Count>
      </S.Footer>
    </S.Wrapper>
  );
}

export default LecueBook;

// {
//   bookId: 1,
//   bookUuid: 'ee4f66f9-9cf4-4b28-90f4-f71d0ecba021',
//   favoriteName: 'Lecue',
//   title: '레큐의 탄생을 축하해!',
//   bookDate: '2024.01.12',
//   bookBackgroundColor: 1,
//   noteNum: 28760,
// },
