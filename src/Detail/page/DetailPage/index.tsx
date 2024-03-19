import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Header from '../../../components/common/Header';
import LoadingPage from '../../../components/common/LoadingPage';
import usePostStickerState from '../../../StickerAttach/hooks/usePostStickerState';
import BookInfoBox from '../../components/BookInfoBox';
import LecueNoteListContainer from '../../components/LecueNoteListContainer';
import SlideBanner from '../../components/SlideBanner';
import useGetBookDetail from '../../hooks/useGetBookDetail';
import * as S from './DetailPage.style';

function DetailPage() {
  const [isEditable, setIsEditable] = useState(true);

  const { bookUuid } = useParams() as { bookUuid: string };
  const { bookDetail, isLoading } = useGetBookDetail(bookUuid);
  const postMutation = usePostStickerState(bookUuid);

  const setEditableStateFalse = () => {
    setIsEditable(false);
  };

  return isLoading || postMutation.isLoading ? (
    <LoadingPage />
  ) : (
    <>
      <Helmet>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="레큐 lecue | ${bookDetail.favoriteName}"
        />
        <meta property="og:description" content="${bookDetail.description}" />
        <meta property="og:image" content="${bookDetail.favoiteImage}" />`
      </Helmet>
      <S.DetailPageWrapper>
        <Header headerTitle="레큐북" isDetailPage={!isEditable} />
        <S.DetailPageBodyWrapper>
          <SlideBanner name={bookDetail.favoriteName} />
          <S.LecueBookContainer>
            <BookInfoBox {...bookDetail} />
            <LecueNoteListContainer
              bookId={bookDetail.bookId}
              bookUuid={bookUuid}
              isEditable={isEditable}
              setEditableStateFalse={setEditableStateFalse}
              noteNum={bookDetail.noteNum}
              backgroundColor={bookDetail.bookBackgroundColor}
              noteList={bookDetail.noteList}
              postedStickerList={bookDetail.postedStickerList}
            />
          </S.LecueBookContainer>
        </S.DetailPageBodyWrapper>
      </S.DetailPageWrapper>
    </>
  );
}

export default DetailPage;
