import BookInfoBox from '../BookInfoBox';
import SlideBanner from '../SlideBanner';

interface BookInfoContainerProps {
  name: string;
  profileImg: string;
  date: string;
  nickname: string;
  title: string;
  content: string;
  backgroundColor: number;
}

function BookInfoContainer({
  name,
  profileImg,
  date,
  nickname,
  title,
  content,
  backgroundColor,
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
        backgroundColor={backgroundColor}
      />
    </div>
  );
}

export default BookInfoContainer;
