import { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Header from '../../components/common/Header';
import LoadingPage from '../../components/common/LoadingPage';
import CommonModal from '../../components/common/Modal/CommonModal';
import BookInfoSection from '../components/BookInfoSection';
import BookInputSection from '../components/BookInputSection';
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

  const handleClickCompleteButton = useCallback(async () => {
    setModalOn(true);
  }, []);

  const postMutation = usePostBook();

  const handleClickCompleteModal = async () => {
    postMutation.mutate({
      favoriteName: name,
      favoriteImage: presignedFileName,
      title: title,
      description: description,
      backgroundColor: backgroundColor,
    });
  };

  const handleChangeTitle = useCallback((title: string) => {
    setTitle(title);
  }, []);

  const handleChangeDescription = useCallback((description: string) => {
    setDescription(description);
  }, []);

  const handleClickBackgroundColor = useCallback((backgroundColor: string) => {
    setBackgroundColor(backgroundColor);
  }, []);

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
          handleFn={() => navigate('/', { state: { step: 1 } })}
          category="book_escape"
          setModalOn={setEscapeModal}
        />
      )}
      <Header headerTitle="레큐북 제작" handleFn={() => setEscapeModal(true)} />
      <S.CreateBookBodyWrapper>
        <BookInputSection
          backgroundColor={backgroundColor}
          title={title}
          changeTitle={handleChangeTitle}
        />

        <BookInfoSection
          backgroundColor={backgroundColor}
          description={description}
          changeDescription={handleChangeDescription}
        />
        <SelectColor
          clickBackgroundColor={handleClickBackgroundColor}
          backgroundColor={backgroundColor}
        />
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
