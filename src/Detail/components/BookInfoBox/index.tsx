import { IcCrown, IcDate } from '../../../assets';
import {
  BookInfoBoxWrapper,
  BookInfoContent,
  BookInfoHeader,
  BookInfoHeaderItem,
  BookInfoHeaderItemWrapper,
  BookInfoTitle,
  BookInfoWrapper,
  ProfileImageWrapper,
  ProfileImg,
} from './BookInfoBox.style';

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
    <BookInfoBoxWrapper isDarkMode={isDarkMode}>
      <ProfileImageWrapper>
        <ProfileImg src={profileImg} />
      </ProfileImageWrapper>
      <BookInfoWrapper>
        <BookInfoHeader>
          <BookInfoHeaderItemWrapper>
            <IcDate />
            <BookInfoHeaderItem isDarkMode={isDarkMode}>
              {date}
            </BookInfoHeaderItem>
          </BookInfoHeaderItemWrapper>
          <BookInfoHeaderItemWrapper>
            <IcCrown />
            <BookInfoHeaderItem isDarkMode={isDarkMode}>
              {nickname}
            </BookInfoHeaderItem>
          </BookInfoHeaderItemWrapper>
        </BookInfoHeader>
        <BookInfoTitle isDarkMode={isDarkMode}>{title}</BookInfoTitle>
        <BookInfoContent isDarkMode={isDarkMode}>{content}</BookInfoContent>
      </BookInfoWrapper>
    </BookInfoBoxWrapper>
  );
}

export default BookInfoBox;
