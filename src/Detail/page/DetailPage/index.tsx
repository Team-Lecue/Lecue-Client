import Header from '../../../components/common/Header';
import BookInfoBox from '../../components/BookInfoBox';
import LecueNoteListContainer from '../../components/LecueNoteListContainer';
import SlideBanner from '../../components/SlideBanner';
import useGetBookDetail from '../../hooks/useGetBookDetail';
import * as S from './DetailPage.style';

function DetailPage() {
  const { bookDetail } = useGetBookDetail();

  return bookDetail ? (
    <S.DetailPageWrapper>
      <Header headerTitle="레큐북" isDetailPage />
      <S.DetailPageBodyWrapper>
        <SlideBanner name={bookDetail.favoriteName} />
        <S.LecueBookContainer>
          <BookInfoBox {...bookDetail} />
          <LecueNoteListContainer
            noteNum={bookDetail.noteNum}
            backgroundColor={bookDetail.bookBackgroundColor}
            noteList={bookDetail.noteList}
            postedStickerList={bookDetail.postedStickerList}
          />
        </S.LecueBookContainer>
      </S.DetailPageBodyWrapper>
    </S.DetailPageWrapper>
  ) : (
    //TODO 에러페이지로 route
    <div>uuid가 틀려서 아무것도 안보임</div>
  );
}

export default DetailPage;
