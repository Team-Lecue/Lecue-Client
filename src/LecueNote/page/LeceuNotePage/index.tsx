import { useState } from 'react';
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
import * as S from './LecueNotePage.style';

function LecueNotePage() {
  const MAX_LENGTH = 1000;
  const navigate = useNavigate();

  const [contents, setContents] = useState('');
  const [imgFile, setImgFile] = useState('');
  const [imgFile2, setImgFile2] = useState<FileReader>();
  const [clickedCategory, setClickedCategory] = useState(CATEGORY[0]);
  const [clickedTextColor, setClickedTextColor] = useState(TEXT_COLOR_CHART[0]);
  const [clickedBgColor, setClickedBgColor] = useState(BG_COLOR_CHART[0]);
  const [isIconClicked, setIsIconClicked] = useState(false);
  const [fileName, setFileName] = useState(BG_COLOR_CHART[0]);
  const [presignedUrl, setPresignedUrl] = useState('');
  const [file, setFile] = useState<File>();
  const [modalOn, setModalOn] = useState(false);
  const [escapeModal, setEscapeModal] = useState(false);

  const putMutation = usePutPresignedUrl();
  const postMutation = usePostLecueNote();
  const location = useLocation();

  const { bookId } = location.state || {};

  const handleClickCategory = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setClickedCategory(e.currentTarget.innerHTML);
  };

  const handleChangeContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
    if (e.target.value.length > MAX_LENGTH) {
      setContents((e.target.value = e.target.value.substring(0, MAX_LENGTH)));
      alert('1000자 내로 작성해주세요.');
    }
  };

  const handleClickedColorBtn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (clickedCategory === '텍스트색') {
      setClickedTextColor(e.currentTarget.id);
    } else {
      setClickedBgColor(e.currentTarget.id);
      setIsIconClicked(false);
    }
  };

  const handleClickedIcon = () => {
    setIsIconClicked(true);
  };

  const handleClickCompleteModal = async () => {
    if (imgFile2) {
      if (imgFile2.result && file) {
        putMutation.mutate({
          presignedUrl: presignedUrl,
          binaryFile: imgFile2.result,
          fileType: file.type,
        });
      }
    }
    postMutation.mutate({
      contents: contents,
      color: clickedTextColor,
      fileName: fileName,
      bgColor: clickedBgColor,
      isIconClicked: isIconClicked,
      bookId: bookId,
    });
  };

  return putMutation.isLoading || postMutation.isLoading ? (
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
          handleFn={() => navigate(-1)}
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
          imgFile={imgFile}
          isIconClicked={isIconClicked}
          clickedBgColor={clickedBgColor}
          clickedTextColor={clickedTextColor}
          contents={contents}
          handleChangeFn={handleChangeContents}
        />
        <SelectColor
          isIconClicked={isIconClicked}
          clickedCategory={clickedCategory}
          clickedTextColor={clickedTextColor}
          clickedBgColor={clickedBgColor}
          setFileName={setFileName}
          handleCategoryFn={handleClickCategory}
          handleColorFn={handleClickedColorBtn}
          handleIconFn={handleClickedIcon}
          uploadImage={(file) => setImgFile(file)}
          binaryImage={(file) => setImgFile2(file)}
          setPresignedUrl={setPresignedUrl}
          selectedFile={(file) => setFile(file)}
        />
      </S.CreateNote>

      <Footer contents={contents} setModalOn={setModalOn} />
    </S.Wrapper>
  );
}

export default LecueNotePage;
