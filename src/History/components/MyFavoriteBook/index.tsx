import React from 'react';

import { IcHomeFavoriteEmpty } from '../../../assets';
import * as S from './MyFavoriteBook.style';

function MyFavoriteBook() {
  const handleClickFavoriteBtn = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    console.log('favorite');
  };

  const handleClickBook = () => {
    console.log('book');
  };

  return (
    <React.Fragment>
      <S.MyFavoriteBookWrapper>
        <S.BookImage onClick={() => handleClickBook()}>
          <S.FavoriteButton
            type="button"
            onClick={(e) => handleClickFavoriteBtn(e)}
          >
            <IcHomeFavoriteEmpty />
          </S.FavoriteButton>
        </S.BookImage>
        <S.Title>SOPT</S.Title>
      </S.MyFavoriteBookWrapper>
    </React.Fragment>
  );
}

export default MyFavoriteBook;
