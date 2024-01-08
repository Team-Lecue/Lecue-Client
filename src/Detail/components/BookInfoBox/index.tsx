import { IcCrown, IcDate } from '../../../assets';
import * as S from './BookInfoBox.style';

interface BookInfoBoxProps {
  profileImg: string;
  date: string;
  nickname: string;
  title: string;
  content: string;
  backgroundColor: number;
}

function BookInfoBox({
  profileImg,
  date,
  nickname,
  title,
  content,
  backgroundColor,
}: BookInfoBoxProps) {
  return (
    <S.BookInfoBoxWrapper backgroundColor={backgroundColor}>
      <S.ProfileImageWrapper>
        <S.ProfileImg src={profileImg} />
      </S.ProfileImageWrapper>
      <S.BookInfoWrapper>
        <S.BookInfoHeader>
          <S.BookInfoHeaderItemWrapper>
            <IcDate />
            <S.BookInfoHeaderItem backgroundColor={backgroundColor}>
              {date}
            </S.BookInfoHeaderItem>
          </S.BookInfoHeaderItemWrapper>
          <S.BookInfoHeaderItemWrapper>
            <IcCrown />
            <S.BookInfoHeaderItem backgroundColor={backgroundColor}>
              {nickname}
            </S.BookInfoHeaderItem>
          </S.BookInfoHeaderItemWrapper>
        </S.BookInfoHeader>
        <S.BookInfoTitle backgroundColor={backgroundColor}>
          {title}
        </S.BookInfoTitle>
        <S.BookInfoContent backgroundColor={backgroundColor}>
          {content}
        </S.BookInfoContent>
      </S.BookInfoWrapper>
    </S.BookInfoBoxWrapper>
  );
}

export default BookInfoBox;
