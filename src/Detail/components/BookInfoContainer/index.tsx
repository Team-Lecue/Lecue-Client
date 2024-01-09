import BookInfoBox from '../BookInfoBox';

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
  profileImg,
  date,
  nickname,
  title,
  content,
  backgroundColor,
}: BookInfoContainerProps) {
  return (
    <div>
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
