import {
  IcCrown,
  IcDate,
  IcZigzagStarOff,
  IcZigzagStarOn,
} from '../../../assets';
import * as S from './BookInfoBox.style';

interface BookInfoBoxProps {
  favoriteImage: string;
  bookDate: string;
  bookNickname: string;
  title: string;
  description: string;
  bookBackgroundColor: string;
  isFavorite?: boolean;
}

function BookInfoBox({
  favoriteImage,
  bookDate,
  bookNickname,
  title,
  description,
  bookBackgroundColor,
  isFavorite,
}: BookInfoBoxProps) {
  return (
    <S.BookInfoBoxWrapper backgroundColor={bookBackgroundColor}>
      <S.ProfileImageWrapper>
        <S.ProfileImg src={favoriteImage} />
      </S.ProfileImageWrapper>
      <S.BookInfoWrapper>
        <S.BookInfoHeader>
          <S.BookInfoHeaderItemWrapper>
            <IcDate />
            <S.BookInfoHeaderItem backgroundColor={bookBackgroundColor}>
              {bookDate}
            </S.BookInfoHeaderItem>
          </S.BookInfoHeaderItemWrapper>
          <S.BookInfoHeaderItemWrapper>
            <IcCrown />
            <S.BookInfoHeaderItem backgroundColor={bookBackgroundColor}>
              {bookNickname}
            </S.BookInfoHeaderItem>
          </S.BookInfoHeaderItemWrapper>
        </S.BookInfoHeader>
        <S.BookInfoTitle backgroundColor={bookBackgroundColor}>
          {title}
          {isFavorite &&
            (isFavorite ? (
              <S.FavoriteBtn type="button">
                <IcZigzagStarOn />
              </S.FavoriteBtn>
            ) : (
              <S.FavoriteBtn type="button">
                <IcZigzagStarOff />
              </S.FavoriteBtn>
            ))}
        </S.BookInfoTitle>
        <S.BookInfoContent backgroundColor={bookBackgroundColor}>
          {description}
        </S.BookInfoContent>
      </S.BookInfoWrapper>
    </S.BookInfoBoxWrapper>
  );
}

export default BookInfoBox;
