import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../../components/common/Header';
import BookInfoBox from '../../components/BookInfoBox';
import LecueNoteListContainer from '../../components/LecueNoteListContainer';
import SlideBanner from '../../components/SlideBanner';
import useGetBookDetail from '../../hooks/useGetBookDetail';
import * as S from './DetailPage.style';

function DetailPage() {
  const [isEditable, setIsEditable] = useState(true);

  const { bookUuid } = useParams() as { bookUuid: string };
  const { bookDetail } = useGetBookDetail(bookUuid);

  const setEditableStateFalse = () => {
    setIsEditable(false);
  };

  return bookDetail ? (
    <S.DetailPageWrapper>
      <Header headerTitle="레큐북" isDetailPage={!isEditable} />
      <S.DetailPageBodyWrapper>
        <SlideBanner name={bookDetail.favoriteName} />
        <S.LecueBookContainer>
          <BookInfoBox {...bookDetail} />
          <LecueNoteListContainer
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
  ) : (
    //TODO 에러페이지로 route
    <div>에러에러에러에러</div>
  );
}

export default DetailPage;
