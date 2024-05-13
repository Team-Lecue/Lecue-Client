import { useReducer, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Header from '../../../components/common/Header';
import LoadingPage from '../../../components/common/LoadingPage';
import CommonModal from '../../../components/common/Modal/CommonModal';
import Footer from '../../components/Footer';
import SelectColor from '../../components/SelectColor';
import WriteNote from '../../components/WriteNote';
import {
  BG_COLOR_CHART,
  CATEGORY,
  TEXT_COLOR_CHART,
} from '../../constants/colorChart';
import usePostLecueNote from '../../hooks/usePostLecueNote';
import usePutPresignedUrl from '../../hooks/usePutPresignedUrl';
import { reducer } from '../../reducer/lecueNoteReducer';
import * as S from './LecueNotePage.style';

function LecueNotePage() {
  const MAX_LENGTH = 1000;
  const navigate = useNavigate();
  const location = useLocation();
  const { putMutation } = usePutPresignedUrl();
  const { postMutation } = usePostLecueNote();
  const isMutationLoading =
    usePutPresignedUrl().isLoading || usePostLecueNote().isLoading;

  const noteContents = sessionStorage.getItem('noteContents');
  const { bookId } = location.state || {};

  const [modalOn, setModalOn] = useState(false);
  const [escapeModal, setEscapeModal] = useState(false);
  const [isNoteLoading, setIsNoteLoading] = useState(false);

  const [lecueNoteState, dispatch] = useReducer(reducer, {
    presignedUrl: '',
    filename: BG_COLOR_CHART[0],
    contents: noteContents !== null ? noteContents : '',
    category: CATEGORY[0],
    textColor: TEXT_COLOR_CHART[0],
    background: BG_COLOR_CHART[0],
    file: null,
    isIconClicked: false,
    imgToStr: '',
    imgToBinary: new FileReader(),
  });

  const {
    presignedUrl,
    filename,
    contents,
    category,
    textColor,
    background,
    file,
    isIconClicked,
    imgToStr,
    imgToBinary,
  } = lecueNoteState;

  const handleIsNoteLoading = (booleanStatus: boolean) => {
    setIsNoteLoading(booleanStatus);
  };

  const handleResetPrevImg = () => {
    dispatch({ type: 'RESET_PREV_IMG' });
  };

  const handleChangeContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({ type: 'SET_CONTENTS', contents: e.target.value });
    if (e.target.value.length > MAX_LENGTH) {
      dispatch({
        type: 'SET_CONTENTS',
        contents: (e.target.value = e.target.value.substring(0, MAX_LENGTH)),
      });
      alert('1000자 내로 작성해주세요.');
    }
  };

  const handleClickedColorBtn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    dispatch({
      type:
        e.currentTarget.name === 'textColor'
          ? 'CLICKED_TEXT_COLOR'
          : 'CLICKED_BG_COLOR',
      color: e.currentTarget.id,
    });

    category !== '텍스트색' && dispatch({ type: 'NOT_CLICKED_IMG_ICON' });
  };

  const handleTransformImgFile = (file: string | FileReader) => {
    if (typeof file === 'string') {
      dispatch({ type: 'IMG_TO_STR', imgFile: file });
    } else {
      dispatch({ type: 'IMG_TO_BINARY', imgFile: file });
    }
  };

  const handleClickCompleteModal = () => {
    if (imgToBinary) {
      if (imgToBinary.result && file) {
        putMutation({
          presignedUrl: presignedUrl,
          binaryFile: imgToBinary.result,
          fileType: file.type,
        });
      }
    }
    postMutation({
      contents: contents,
      color: textColor,
      fileName: filename,
      bgColor: background,
      isIconClicked: isIconClicked,
      bookId: bookId,
    });

    sessionStorage.setItem('noteContents', '');
  };

  return isMutationLoading ? (
    <LoadingPage />
  ) : (
    <S.Wrapper>
      {modalOn && (
        <CommonModal
          handleFn={handleClickCompleteModal}
          category="note_complete"
          setModalOn={setModalOn}
        />
      )}

      {escapeModal && (
        <CommonModal
          handleFn={() => {
            navigate(-1);
            sessionStorage.setItem('noteContents', '');
          }}
          category="note_escape"
          setModalOn={setEscapeModal}
        />
      )}

      <Header
        headerTitle="레큐노트 작성"
        handleFn={() => setEscapeModal(true)}
      />

      <S.CreateNote>
        <WriteNote
          isLoading={isNoteLoading}
          imgFile={imgToStr}
          isIconClicked={isIconClicked}
          lecueNoteState={lecueNoteState}
          contents={contents}
          handleChangeFn={handleChangeContents}
          handleResetPrevImg={handleResetPrevImg}
        />

        <SelectColor
          isIconClicked={isIconClicked}
          lecueNoteState={lecueNoteState}
          presignedUrlDispatch={dispatch}
          handleTransformImgFile={(imgFile) => handleTransformImgFile(imgFile)}
          selectedFile={(file: File) =>
            dispatch({ type: 'SELECTED_FILE', file: file })
          }
          handleCategoryFn={(e) =>
            dispatch({
              type: 'CLICKED_CATEGORY',
              category: e.currentTarget.innerHTML,
            })
          }
          handleColorFn={handleClickedColorBtn}
          handleIconFn={() => dispatch({ type: 'CLICKED_IMG_ICON' })}
          handleIsLoading={handleIsNoteLoading}
        />
      </S.CreateNote>

      <Footer contents={lecueNoteState.contents} setModalOn={setModalOn} />
    </S.Wrapper>
  );
}

export default LecueNotePage;
