import { IcCrown, IcDate } from '../../../assets';
import * as S from './BookInfoBox.style';

interface BookInfoBoxProps {
  profileImg: string;
  date: string;
  nickname: string;
  title: string;
  content: string;
  isDarkMode: boolean;
}

function BookInfoBox({
  profileImg,
  date,
  nickname,
  title,
  content,
  isDarkMode,
}: BookInfoBoxProps) {
  return (
    <S.BookInfoBoxWrapper isDarkMode={isDarkMode}>
      <S.ProfileImageWrapper>
        <S.ProfileImg src={profileImg} />
      </S.ProfileImageWrapper>
      <S.BookInfoWrapper>
        <S.BookInfoHeader>
          <S.BookInfoHeaderItemWrapper>
            <IcDate />
            <S.BookInfoHeaderItem isDarkMode={isDarkMode}>
              {date}
            </S.BookInfoHeaderItem>
          </S.BookInfoHeaderItemWrapper>
          <S.BookInfoHeaderItemWrapper>
            <IcCrown />
            <S.BookInfoHeaderItem isDarkMode={isDarkMode}>
              {nickname}
            </S.BookInfoHeaderItem>
          </S.BookInfoHeaderItemWrapper>
        </S.BookInfoHeader>
        <S.BookInfoTitle isDarkMode={isDarkMode}>{title}</S.BookInfoTitle>
        <S.BookInfoContent isDarkMode={isDarkMode}>{content}</S.BookInfoContent>
      </S.BookInfoWrapper>
    </S.BookInfoBoxWrapper>
  );
}

export default BookInfoBox;
