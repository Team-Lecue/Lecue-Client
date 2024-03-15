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

  const handleClickFavoriteIcon = (bookId: number) => {
    // api가 나오면 서버 통신 코드로 변경할 예정! (현재는 임시로 구현해둠)
    const clickedBookMark = document.getElementById(`${bookId}`);

    if (clickedBookMark) {
      clickedBookMark.style.display = 'none';
    }
  };

  return (
    <S.LecueBookListWrapper>
      <S.Title>{title}</S.Title>
      {data && data.length !== 0 ? (
        <S.LecueBookList>
          {data.map((book: BookProps) => (
            <S.LecueBook key={book.bookId} id={`${book.bookId}`}>
              {isBookmark && (
                <S.IconWrapper
                  onClick={() => handleClickFavoriteIcon(book.bookId)}
                >
                  <IcHomeFavorite />
                </S.IconWrapper>
              )}

              <S.BookImage
                src={book.favoriteImage}
                alt="레큐북-이미지"
                onClick={() => handleClickLecueBook(book.bookUuid)}
              />
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
