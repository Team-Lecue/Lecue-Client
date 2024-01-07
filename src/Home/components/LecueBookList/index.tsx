import * as S from './LecueBookList.style';

function LecueBookList() {
  const handleClickLecueBook = (bookName: string) => {
    alert(`${bookName} 선택되었습니다.`);
  };

  return (
    <S.LecueBookListWrapper>
      <S.Title>인기 레큐북 구경하기</S.Title>
      <S.LecueBookList>
        {BOOK_LIST.map((book) => (
          <S.LecueBook
            key={book.bookId}
            onClick={() => handleClickLecueBook(book.favoriteName)}
          >
            <S.BookImage src={book.favoriteImage} alt="레큐북-이미지" />
            <S.BookTitle>{book.favoriteName}</S.BookTitle>
          </S.LecueBook>
        ))}
        ;
      </S.LecueBookList>
    </S.LecueBookListWrapper>
  );
}

export default LecueBookList;

const BOOK_LIST = [
  {
    bookId: 0,
    favoriteName: 'SOPT',
    favoriteImage: 'https://source.unsplash.com/random/98x98?sig=1',
  },
  {
    bookId: 1,
    favoriteName: '환승연애 출연진',
    favoriteImage: 'https://source.unsplash.com/random/98x98?sig=2',
  },
  {
    bookId: 2,
    favoriteName: 'Vanner',
    favoriteImage: 'https://source.unsplash.com/random/98x98?sig=3',
  },
  {
    bookId: 3,
    favoriteName: '침착맨 생카 데이쥬',
    favoriteImage: 'https://source.unsplash.com/random/98x98?sig=4',
  },
  {
    bookId: 4,
    favoriteName: '빠니보틀',
    favoriteImage: 'https://source.unsplash.com/random/98x98?sig=5',
  },
  {
    bookId: 5,
    favoriteName: '레오제이',
    favoriteImage: 'https://source.unsplash.com/random/98x98?sig=6',
  },
  {
    bookId: 6,
    favoriteName: '곽튜브',
    favoriteImage: 'https://source.unsplash.com/random/98x98?sig=7',
  },
  {
    bookId: 7,
    favoriteName: '재롱잔치',
    favoriteImage: 'https://source.unsplash.com/random/98x98?sig=8',
  },
  {
    bookId: 8,
    favoriteName: '주호다',
    favoriteImage: 'https://source.unsplash.com/random/98x98?sig=9',
  },
  {
    bookId: 9,
    favoriteName: '1분요리 뚝딱이형',
    favoriteImage: 'https://source.unsplash.com/random/98x98?sig=10',
  },
  {
    bookId: 10,
    favoriteName: '송이송이',
    favoriteImage: 'https://source.unsplash.com/random/98x98?sig=11',
  },
  {
    bookId: 11,
    favoriteName: '상윤쓰',
    favoriteImage: 'https://source.unsplash.com/random/98x98?sig=12',
  },
  {
    bookId: 12,
    favoriteName: '1분요리 뚝딱이형',
    favoriteImage: 'https://source.unsplash.com/random/98x98?sig=13',
  },
  {
    bookId: 13,
    favoriteName: '송이송이',
    favoriteImage: 'https://source.unsplash.com/random/98x98?sig=14',
  },
  {
    bookId: 14,
    favoriteName: '상윤쓰',
    favoriteImage: 'https://source.unsplash.com/random/98x98?sig=15',
  },
];
