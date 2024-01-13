import Header from '../../../components/common/Header';
import BookInfoBox from '../../components/BookInfoBox';
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
        '야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에',
      noteDate: '2024. 01. 09',
      noteNickname: '웹팟이미래다크크',
      noteTextColor: 0,
      noteBackgroundColor: -1,
      noteBackgroundImage:
        'https://lequu-server-bucket.s3.ap-northeast-2.amazonaws.com/notes/background_image/469456ec-5894-4014-8b90-332d453217ba.jpg',
    },
    {
      noteId: 2,
      renderType: 2,
      content: '야야야양야야야양야양 다음에 웨비고?',
      noteDate: '2024. 01. 09',
      noteNickname: '웹팟이미래다크크',
      noteTextColor: 1,
      noteBackgroundColor: -1,
      noteBackgroundImage:
        'https://lequu-server-bucket.s3.ap-northeast-2.amazonaws.com/notes/background_image/912ac7e2-672a-4f26-b115-b90cda4d7cc3.jpg',
    },
    {
      noteId: 3,
      renderType: 3,
      content:
        '야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에',
      noteDate: '2024. 01. 09',
      noteNickname: '웹팟이미래다크크',
      noteTextColor: 0,
      noteBackgroundColor: -1,
      noteBackgroundImage:
        'https://lequu-server-bucket.s3.ap-northeast-2.amazonaws.com/notes/background_image/676c2ca3-f868-423f-8000-a0bcb67dc797.jpg',
    },
    {
      noteId: 4,
      renderType: 4,
      content:
        '야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에',
      noteDate: '2024. 01. 09',
      noteNickname: '웹팟이미래다크크',
      noteTextColor: 1,
      noteBackgroundColor: 4,
      noteBackgroundImage: '',
    },
    {
      noteId: 5,
      renderType: 5,
      content:
        '야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에',
      noteDate: '2024. 01. 09',
      noteNickname: '웹팟이미래다크크',
      noteTextColor: 0,
      noteBackgroundColor: -1,
      noteBackgroundImage:
        'https://lequu-server-bucket.s3.ap-northeast-2.amazonaws.com/notes/background_image/676c2ca3-f868-423f-8000-a0bcb67dc797.jpg',
    },
    {
      noteId: 6,
      renderType: 6,
      content:
        '야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에',
      noteDate: '2024. 01. 09',
      noteNickname: '웹팟이미래다크크',
      noteTextColor: 1,
      noteBackgroundColor: -1,
      noteBackgroundImage:
        'https://lequu-server-bucket.s3.ap-northeast-2.amazonaws.com/notes/background_image/469456ec-5894-4014-8b90-332d453217ba.jpg',
    },
    {
      noteId: 7,
      renderType: 3,
      content:
        '야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에',
      noteDate: '2024. 01. 09',
      noteNickname: '웹팟이미래다크크',
      noteTextColor: 0,
      noteBackgroundColor: -1,
      noteBackgroundImage:
        'https://lequu-server-bucket.s3.ap-northeast-2.amazonaws.com/notes/background_image/676c2ca3-f868-423f-8000-a0bcb67dc797.jpg',
    },
    {
      noteId: 8,
      renderType: 4,
      content:
        '야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에',
      noteDate: '2024. 01. 09',
      noteNickname: '웹팟이미래다크크',
      noteTextColor: 1,
      noteBackgroundColor: 4,
      noteBackgroundImage: '',
    },
    {
      noteId: 9,
      renderType: 5,
      content:
        '야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에',
      noteDate: '2024. 01. 09',
      noteNickname: '웹팟이미래다크크',
      noteTextColor: 0,
      noteBackgroundColor: -1,
      noteBackgroundImage:
        'https://lequu-server-bucket.s3.ap-northeast-2.amazonaws.com/notes/background_image/676c2ca3-f868-423f-8000-a0bcb67dc797.jpg',
    },
    {
      noteId: 10,
      renderType: 6,
      content:
        '야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에',
      noteDate: '2024. 01. 09',
      noteNickname: '웹팟이미래다크크',
      noteTextColor: 1,
      noteBackgroundColor: -1,
      noteBackgroundImage:
        'https://lequu-server-bucket.s3.ap-northeast-2.amazonaws.com/notes/background_image/469456ec-5894-4014-8b90-332d453217ba.jpg',
    },
    {
      noteId: 11,
      renderType: 3,
      content:
        '야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에',
      noteDate: '2024. 01. 09',
      noteNickname: '웹팟이미래다크크',
      noteTextColor: 0,
      noteBackgroundColor: 1,
      noteBackgroundImage: '',
    },
    {
      noteId: 12,
      renderType: 4,
      content:
        '야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에',
      noteDate: '2024. 01. 09',
      noteNickname: '웹팟이미래다크크',
      noteTextColor: 1,
      noteBackgroundColor: 4,
      noteBackgroundImage: '',
    },
    {
      noteId: 13,
      renderType: 5,
      content:
        '야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에',
      noteDate: '2024. 01. 09',
      noteNickname: '웹팟이미래다크크',
      noteTextColor: 0,
      noteBackgroundColor: -1,
      noteBackgroundImage:
        'https://lequu-server-bucket.s3.ap-northeast-2.amazonaws.com/notes/background_image/676c2ca3-f868-423f-8000-a0bcb67dc797.jpg',
    },
    {
      noteId: 14,
      renderType: 6,
      content:
        '야야야양야야야양야양 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에 웨비고? 다음에',
      noteDate: '2024. 01. 09',
      noteNickname: '웹팟이미래다크크',
      noteTextColor: 1,
      noteBackgroundColor: -1,
      noteBackgroundImage:
        'https://lequu-server-bucket.s3.ap-northeast-2.amazonaws.com/notes/background_image/469456ec-5894-4014-8b90-332d453217ba.jpg',
    },
  ],
};

function DetailPage() {
  return (
    <S.DetailPageWrapper>
      <Header headerTitle={'레큐북'} isDetailPage />
      <S.DetailPageBodyWrapper>
        <SlideBanner name={testProp.name} />
        <S.LecueBookContainer>
          <BookInfoBox {...testProp} />
          <LecueNoteListContainer
            noteNum={testProp.noteNum}
            backgroundColor={testProp.backgroundColor}
            noteList={testProp.noteList}
          />
        </S.LecueBookContainer>
      </S.DetailPageBodyWrapper>
    </S.DetailPageWrapper>
  );
}

export default DetailPage;
