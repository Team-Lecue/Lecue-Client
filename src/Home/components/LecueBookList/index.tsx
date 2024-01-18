// import { useNavigate } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleClickLecueBook = (uuid: string) => {
    navigate(`/lecue-book/${uuid}`);
  };

  return (
    <S.LecueBookListWrapper>
      <S.Title>인기 레큐북 구경하기</S.Title>
      <S.LecueBookList>
        {data &&
          data.data.map((book: BookProps) => (
            <S.LecueBook
              key={book.bookId}
              onClick={() => handleClickLecueBook(book.bookUuid)}
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
