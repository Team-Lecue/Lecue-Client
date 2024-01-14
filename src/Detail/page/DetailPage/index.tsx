import Header from '../../../components/common/Header';
import BookInfoBox from '../../components/BookInfoBox';
import LecueNoteListContainer from '../../components/LecueNoteListContainer';
import SlideBanner from '../../components/SlideBanner';
import * as S from './DetailPage.style';

function DetailPage() {
  return (
    <S.DetailPageWrapper>
      <Header headerTitle={'레큐북'} isDetailPage />
      <S.DetailPageBodyWrapper>
        <SlideBanner name={testProp.title} />
        <S.LecueBookContainer>
          <BookInfoBox {...testProp} />
          <LecueNoteListContainer
            noteNum={testProp.noteNum}
            backgroundColor={testProp.bookBackgroundColor}
            noteList={testProp.noteList}
            postedStickerList={testProp.postedStickerList}
          />
        </S.LecueBookContainer>
      </S.DetailPageBodyWrapper>
    </S.DetailPageWrapper>
  );
}

export default DetailPage;

// test

const testProp = {
  bookId: 1,
  favoriteImage:
    'https://s3-alpha-sig.figma.com/img/db13/905b/40596e7ff9d7e2c5d23d2b59eaed1a7f?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YdVtmax5JokofS88zzvQYV8dhDYNr5gALJf1s0eyCl9siaRilm9ZtXOtCSOe~UsH~~K5jEkb81jG3ccCA9FJ25BvUgR9K388K7h90OcCHmn-Wo4enHTIV85J2U2yIiOqh8IDoKNxG9H2hHxKVBU8GzdNitXCkUHtAaxTZRN4taiMZkVFyrFCEw-04VBKywXmAAOd3EaWJ0rJgKqecBpOKnB6DT6HgHlX3wxWhHsQI1KKqueJmXLhT4n-AxWCVALVJDdoT3VvB9-AsecG5C6og89535kPkOmVxUhwhQunmAmWYev0bPDhaSQpVDUwyVDUHgVUmuENYB4Y017o5RjiFA__',
  favoriteName: 'LeoJ',
  title: '1번째 레큐북',
  description: '레큐북의 내용입니다!',
  bookDate: '2024.01.14',
  bookNickname: '귀요미 도리',
  bookBackgroundColor: 1,
  noteNum: 6,
  noteList: [
    {
      noteId: 6,
      renderType: 1,
      content:
        '레큐노트 내용입니다 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라',
      noteDate: '2024.01.14',
      noteNickname: '큐비',
      noteTextColor: 0,
      noteBackgroundColor: 2,
      noteBackgroundImage: '',
    },
    {
      noteId: 5,
      renderType: 2,
      content:
        '레큐노트 내용입니다 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라',
      noteDate: '2024.01.14',
      noteNickname: '큐비',
      noteTextColor: 0,
      noteBackgroundColor: 1,
      noteBackgroundImage: '',
    },
    {
      noteId: 4,
      renderType: 3,
      content:
        '레큐노트 내용입니다 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라',
      noteDate: '2024.01.14',
      noteNickname: '큐비',
      noteTextColor: 0,
      noteBackgroundColor: 0,
      noteBackgroundImage: '',
    },
    {
      noteId: 3,
      renderType: 4,
      content:
        '레큐노트 내용입니다 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라',
      noteDate: '2024.01.14',
      noteNickname: '큐비',
      noteTextColor: 0,
      noteBackgroundColor: -1,
      noteBackgroundImage:
        'https://lequu-server-bucket.s3.ap-northeast-2.amazonaws.com/notes/background_image/676c2ca3-f868-423f-8000-a0bcb67dc797.jpg',
    },
    {
      noteId: 2,
      renderType: 5,
      content:
        '레큐노트 내용입니다 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라',
      noteDate: '2024.01.14',
      noteNickname: '큐비',
      noteTextColor: 0,
      noteBackgroundColor: -1,
      noteBackgroundImage:
        'https://lequu-server-bucket.s3.ap-northeast-2.amazonaws.com/notes/background_image/676c2ca3-f868-423f-8000-a0bcb67dc797.jpg',
    },
    {
      noteId: 1,
      renderType: 6,
      content:
        '레큐노트 내용입니다 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라',
      noteDate: '2024.01.14',
      noteNickname: '큐비',
      noteTextColor: 0,
      noteBackgroundColor: -1,
      noteBackgroundImage:
        'https://lequu-server-bucket.s3.ap-northeast-2.amazonaws.com/notes/background_image/676c2ca3-f868-423f-8000-a0bcb67dc797.jpg',
    },
  ],
  postedStickerList: [
    {
      postedStickerId: 1,
      stickerImage:
        'https://lequu-server-bucket.s3.ap-northeast-2.amazonaws.com/stickers/birth_1.svg',
      positionX: 30,
      positionY: 60,
    },
  ],
};
