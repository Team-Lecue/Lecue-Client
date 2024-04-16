import React from 'react';

import LecueBook from '../../../components/common/LecueBook';
import useGetMyFavorite from '../../hooks/useGetMyFavorite';
import { FavoriteBookProps } from '../../types/historyType';
import HistoryEmptyView from '../HistoryEmptyView';
import * as S from './MyFavoriteBookList.style';

function MyFavoriteBookList() {
  const { myFavoriteList } = useGetMyFavorite();

  return (
    <React.Fragment>
      {myFavoriteList && myFavoriteList.length !== 0 ? (
        <S.MyFavoriteBookListWrapper>
          {myFavoriteList.map((book: FavoriteBookProps) => {
            return (
              <LecueBook
                key={book.bookId}
                bookId={book.bookId}
                bookUuid={book.bookUuid}
                favoriteImage={book.favoriteImage}
                favoriteName={book.favoriteName}
                bookType="favorite"
                deleteType="mypage"
              />
            );
          })}
        </S.MyFavoriteBookListWrapper>
      ) : (
        <HistoryEmptyView
          topLineText={'아직 즐겨찾기한 레큐북이 없어요'}
          bottomLineText={'자주 보고싶은 레큐북을 즐겨찾기 해보세요'}
        />
      )}
    </React.Fragment>
  );
}

export default MyFavoriteBookList;
