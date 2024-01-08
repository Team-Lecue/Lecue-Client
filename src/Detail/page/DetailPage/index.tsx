import Header from '../../../components/common/Header';
import BookInfoContainer from '../../components/BookInfoContainer';

// test

const testProp = {
  name: '레오제이',
  profileImg:
    'https://s3-alpha-sig.figma.com/img/db13/905b/40596e7ff9d7e2c5d23d2b59eaed1a7f?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YdVtmax5JokofS88zzvQYV8dhDYNr5gALJf1s0eyCl9siaRilm9ZtXOtCSOe~UsH~~K5jEkb81jG3ccCA9FJ25BvUgR9K388K7h90OcCHmn-Wo4enHTIV85J2U2yIiOqh8IDoKNxG9H2hHxKVBU8GzdNitXCkUHtAaxTZRN4taiMZkVFyrFCEw-04VBKywXmAAOd3EaWJ0rJgKqecBpOKnB6DT6HgHlX3wxWhHsQI1KKqueJmXLhT4n-AxWCVALVJDdoT3VvB9-AsecG5C6og89535kPkOmVxUhwhQunmAmWYev0bPDhaSQpVDUwyVDUHgVUmuENYB4Y017o5RjiFA__',
  date: '2024.01.25',
  nickname: '큐야',
  title: '첫 예능 라디오스타 축하해!',
  content:
    '우리만의 스타 레오제이 !! 3년만에 첫 예능이자 라디오스타 출연 넘 축하해~!! 앞으로 계속 이렇게 우리 옆에 있어줘! 항상 응원할게! 어그래그래어엉',
  backgroundColor: 0,
};

function DetailPage() {
  return (
    <div>
      <Header headerTitle={'레큐북'} isDetailPage />
      <BookInfoContainer {...testProp} />
    </div>
  );
}

export default DetailPage;
