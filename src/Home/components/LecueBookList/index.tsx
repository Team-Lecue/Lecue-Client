// import { useNavigate } from 'react-router-dom';

import useGetLecueBook from '../../hooks/useGetLecueBook';
import * as S from './LecueBookList.style';

interface BookProps {
  bookId: number;
  bookUuid: string;
  favoriteImage: string;
  favoriteName: string;
}

function LecueBookList() {
  const { data } = useGetLecueBook();
  // const navigate = useNavigate();

  const handleClickLecueBook = (bookName: string, uuid: string) => {
    alert(`${bookName}, ${uuid} 선택되었습니다.`);
    // 추후 살릴 예정!
    // navigate(`/lecue-book/${uuid}`);
  };

  return (
    <S.LecueBookListWrapper>
      <S.Title>인기 레큐북 구경하기</S.Title>
      <S.LecueBookList>
        {data.data.map((book: BookProps) => (
          <S.LecueBook
            key={book.bookId}
            onClick={() =>
              handleClickLecueBook(book.favoriteName, book.bookUuid)
            }
          >
            <S.BookImage src={book.favoriteImage} alt="레큐북-이미지" />
            <S.BookTitle>{book.favoriteName}</S.BookTitle>
          </S.LecueBook>
        ))}
      </S.LecueBookList>
    </S.LecueBookListWrapper>
  );
}

export default LecueBookList;
