import { useNavigate } from 'react-router';

import { IcHomeFavorite } from '../../../assets';
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
  data?: BookProps[];
}

function LecueBookList({ title, data }: LecueBookListProps) {
  const navigate = useNavigate();
  const isBookmark = title.includes('즐겨찾기');

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
                {isBookmark && (
                  <S.IconWrapper>
                    <IcHomeFavorite />
                  </S.IconWrapper>
                )}
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
