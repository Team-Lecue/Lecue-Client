import BookInfoBox from '../BookInfoBox';
import SlideBanner from '../SlideBanner';

interface BookInfoContainerProps {
  name: string;
  profileImg: string;
  date: string;
  nickname: string;
  title: string;
  content: string;
  isDarkMode: boolean;
}

function BookInfoContainer({
  name,
  profileImg,
  date,
  nickname,
  title,
  content,
  isDarkMode,
}: BookInfoContainerProps) {
  return (
    <div>
      <SlideBanner name={name} />
      <BookInfoBox
        profileImg={profileImg}
        date={date}
        nickname={nickname}
        title={title}
        content={content}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

export default BookInfoContainer;
