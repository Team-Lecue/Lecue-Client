import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Header from '../../components/common/Header';
import LoadingPage from '../../components/common/LoadingPage';
import CommonModal from '../../components/common/Modal/CommonModal';
import BookInfoTextarea from '../components/BookInfoTextarea';
import BookInput from '../components/BookInput';
import CompleteButton from '../components/CompleteButton';
import SelectColor from '../components/SelectColor';
import usePostBook from '../hooks/usePostBook';
import * as S from './CreateBook.style';

function CreateBook() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#F5F5F5');
  const [modalOn, setModalOn] = useState(false);
  const [escapeModal, setEscapeModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { presignedFileName, name } = location.state || {};

  const handleClickCompleteButton = async () => {
    setModalOn(true);
  };

  const postMutation = usePostBook();

  const handleClickCompleteModal = async () => {
    const bookUuid = postMutation.mutate({
      favoriteName: name,
      favoriteImage: presignedFileName,
      title: title,
      description: description,
      backgroundColor: backgroundColor,
    });
    navigate(`/lecue-book/${bookUuid}`);
  };

  return postMutation.isLoading ? (
    <LoadingPage />
  ) : (
    <S.CreateBookWrapper $backgroundColor={backgroundColor}>
      {modalOn && (
        <CommonModal
          handleFn={handleClickCompleteModal}
          category="book_create"
          setModalOn={setModalOn}
        />
      )}
      {escapeModal && (
        <CommonModal
          handleFn={() => navigate(-1)}
          category="book_escape"
          setModalOn={setEscapeModal}
        />
      )}
      <Header
        headerTitle="레큐북 만들기"
        handleFn={() => setEscapeModal(true)}
      />
      <S.CreateBookBodyWrapper>
        <S.InputWrapper>
          <S.BookInputWrapper>
            <S.SectionTitle variant={backgroundColor === '#191919'}>
              레큐북 제목
            </S.SectionTitle>
            <BookInput title={title} changeTitle={(title) => setTitle(title)} />
          </S.BookInputWrapper>
          <S.BookInfoTextareaWrapper>
            <S.SectionTitle variant={backgroundColor === '#191919'}>
              레큐북 소개
            </S.SectionTitle>
            <BookInfoTextarea
              description={description}
              changeDescription={(description) => setDescription(description)}
            />
          </S.BookInfoTextareaWrapper>
          <SelectColor
            clickBackgroundColor={(backgroundColor: string) =>
              setBackgroundColor(backgroundColor)
            }
            backgroundColor={backgroundColor}
          />
        </S.InputWrapper>
        <CompleteButton
          backgroundColor={backgroundColor}
          isActive={title.length !== 0 && description.length !== 0}
          onClick={handleClickCompleteButton}
        />
      </S.CreateBookBodyWrapper>
    </S.CreateBookWrapper>
  );
}

export default CreateBook;
