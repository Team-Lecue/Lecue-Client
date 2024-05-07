import { useEffect, useState } from 'react';

import {
  IcCrown,
  IcDate,
  IcZigzagStarOff,
  IcZigzagStarOn,
} from '../../../assets';
import useDeleteFavorite from '../../../libs/hooks/useDeleteFavorite';
import usePostFavorite from '../../../libs/hooks/usePostFavorite';
import * as S from './BookInfoBox.style';

interface BookInfoBoxProps {
  favoriteImage: string;
  bookDate: string;
  bookNickname: string;
  title: string;
  description: string;
  bookBackgroundColor: string;
  bookId: number;
  isFavorite?: boolean;
  bookUuid: string;
}

function BookInfoBox({
  favoriteImage,
  bookDate,
  bookNickname,
  title,
  description,
  bookBackgroundColor,
  isFavorite,
  bookId,
  bookUuid,
}: BookInfoBoxProps) {
  const token = window.localStorage.getItem('token');
  const [isLogin, setIsLogin] = useState(false);

  const postFavoriteMutation = usePostFavorite('lecueBookDetail', bookUuid);
  const deleteFavoriteMutation = useDeleteFavorite('lecueBookDetail', bookUuid);

  const handleFavoriteBtn = () => {
    isFavorite ? deleteFavoriteMutation(bookId) : postFavoriteMutation(bookId);
  };

  useEffect(() => {
    token ? setIsLogin(true) : setIsLogin(false);
  }, []);

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
        <S.BookInfoTitle>
          <S.BookInfoTitleText backgroundColor={bookBackgroundColor}>
            {title}
          </S.BookInfoTitleText>
          {isLogin &&
            (isFavorite ? (
              <S.FavoriteBtn type="button" onClick={handleFavoriteBtn}>
                <IcZigzagStarOn />
              </S.FavoriteBtn>
            ) : (
              <S.FavoriteBtn type="button" onClick={handleFavoriteBtn}>
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
