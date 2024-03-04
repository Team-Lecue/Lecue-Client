import { useNavigate } from 'react-router';

import NoBookmarkList from '../NoBookmarkList';
import * as S from './LecueBookList.style';

interface BookProps {
  bookId: number;
  bookUuid: string;
  favoriteImage: string;
  favoriteName: string;
}

interface LecueBookListProps {
  title: string;
  data?: [BookProps];
}

function LecueBookList({ title, data }: LecueBookListProps) {
  const navigate = useNavigate();

  const handleClickLecueBook = (uuid: string) => {
    navigate(`/lecue-book/${uuid}`);
  };

  return (
    <S.LecueBookListWrapper>
      <S.Title>{title}</S.Title>
      {data ? (
        <S.LecueBookList>
          {data &&
            data.map((book: BookProps) => (
              <S.LecueBook
                key={book.bookId}
                onClick={() => handleClickLecueBook(book.bookUuid)}
              >
                <S.BookImage src={book.favoriteImage} alt="레큐북-이미지" />
                <S.BookTitle>{book.favoriteName}</S.BookTitle>
              </S.LecueBook>
            ))}
        </S.LecueBookList>
      ) : (
        <NoBookmarkList />
      )}
    </S.LecueBookListWrapper>
  );
}

export default LecueBookList;
