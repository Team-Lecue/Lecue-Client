import useGetFavorite from '../../../libs/hooks/useGetFavorite';
import MyFavoriteBook from '../MyFavoriteBook';
import * as S from './MyFavoriteBookList.style';

function MyFavoriteBookList() {
  const { data } = useGetFavorite();

  return (
    <S.MyFavoriteBookListWrapper>
      <MyFavoriteBook />
      <MyFavoriteBook />
      <MyFavoriteBook />
      <MyFavoriteBook />
      <MyFavoriteBook />
      <MyFavoriteBook />
      <MyFavoriteBook />
      <MyFavoriteBook />
      <MyFavoriteBook />
      <MyFavoriteBook />
      <MyFavoriteBook />
      <MyFavoriteBook />
      <MyFavoriteBook />
      <MyFavoriteBook />
      <MyFavoriteBook />
    </S.MyFavoriteBookListWrapper>
  );
}

export default MyFavoriteBookList;
