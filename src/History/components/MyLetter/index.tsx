import { useNavigate } from 'react-router-dom';

import { MyLetterProps } from '../../types/historyType';
import * as S from './MyLetter.style';

function MyLetter({
  bookUuid,
  favoriteName,
  title,
  content,
  noteDate,
}: MyLetterProps) {
  const navigate = useNavigate();

  const handleClickMyLetter = () => {
    navigate(`/lecue-book/${bookUuid}`);
  };

  return (
    <S.MyLetterWrapper onClick={handleClickMyLetter}>
      <S.MyLetterFavorite>{favoriteName}</S.MyLetterFavorite>
      <S.MyLetterTitle>{title}</S.MyLetterTitle>
      <S.MyLetterContent>{content}</S.MyLetterContent>
      <S.MyLetterDate>{noteDate}</S.MyLetterDate>
    </S.MyLetterWrapper>
  );
}

export default MyLetter;
