import Header from '../../../components/common/Header';
import BookInfoContainer from '../../components/BookInfoContainer';
import LecueNoteListContainer from '../../components/LecueNoteListContainer';
import SlideBanner from '../../components/SlideBanner';
import * as S from './DetailPage.style';

// test

const testProp = {
  name: 'LeoJ',
  profileImg:
    'https://s3-alpha-sig.figma.com/img/db13/905b/40596e7ff9d7e2c5d23d2b59eaed1a7f?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YdVtmax5JokofS88zzvQYV8dhDYNr5gALJf1s0eyCl9siaRilm9ZtXOtCSOe~UsH~~K5jEkb81jG3ccCA9FJ25BvUgR9K388K7h90OcCHmn-Wo4enHTIV85J2U2yIiOqh8IDoKNxG9H2hHxKVBU8GzdNitXCkUHtAaxTZRN4taiMZkVFyrFCEw-04VBKywXmAAOd3EaWJ0rJgKqecBpOKnB6DT6HgHlX3wxWhHsQI1KKqueJmXLhT4n-AxWCVALVJDdoT3VvB9-AsecG5C6og89535kPkOmVxUhwhQunmAmWYev0bPDhaSQpVDUwyVDUHgVUmuENYB4Y017o5RjiFA__',
  date: '2024.01.25',
  nickname: '큐야',
  title: '첫 예능 라디오스타 축하해!',
  content:
    '우리만의 스타 레오제이 !! 3년만에 첫 예능이자 라디오스타 출연 넘 축하해~!! 앞으로 계속 이렇게 우리 옆에 있어줘! 항상 응원할게! 어그래그래어엉',
  noteNum: 123123243,
  backgroundColor: 1,
  noteList: [
    {
      noteId: 1,
      renderType: 1,
      content:
        '야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에',
      noteDate: '2024. 01. 09',
      noteNickname: '웹팟이미래다크크',
      noteBackgroundColor: 1,
    },
    {
      noteId: 2,
      renderType: 2,
      content:
        '야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에',
      noteDate: '2024. 01. 09',
      noteNickname: '웹팟이미래다크크',
      noteBackgroundColor: 2,
    },
    {
      noteId: 3,
      renderType: 3,
      content:
        '야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에',
      noteDate: '2024. 01. 09',
      noteNickname: '웹팟이미래다크크',
      noteBackgroundColor: 3,
    },
    {
      noteId: 4,
      renderType: 4,
      content:
        '야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에',
      noteDate: '2024. 01. 09',
      noteNickname: '웹팟이미래다크크',
      noteBackgroundColor: 4,
    },
    {
      noteId: 5,
      renderType: 5,
      content:
        '야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에',
      noteDate: '2024. 01. 09',
      noteNickname: '웹팟이미래다크크',
      noteBackgroundColor: 5,
    },
    {
      noteId: 6,
      renderType: 6,
      content:
        '야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에',
      noteDate: '2024. 01. 09',
      noteNickname: '웹팟이미래다크크',
      noteBackgroundColor: 6,
    },
  ],
};

function DetailPage() {
  return (
    <S.DetailPageWrapper>
      <Header headerTitle={'레큐북'} isDetailPage />
      <S.DetailPageBody>
        <SlideBanner name={testProp.name} />
        <S.LecueBookContainer>
          <BookInfoContainer {...testProp} />
          <LecueNoteListContainer
            noteNum={testProp.noteNum}
            backgroundColor={testProp.backgroundColor}
            noteList={testProp.noteList}
          />
        </S.LecueBookContainer>
      </S.DetailPageBody>
    </S.DetailPageWrapper>
  );
}

export default DetailPage;
