import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Header from '../../../components/common/Header';
import CommonModal from '../../../components/common/Modal/CommonModal';
import CreateNote from '../../components/CreateNote';
import Footer from '../../components/Footer';
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
  const [clickedCategory, setclickedCategory] = useState(CATEGORY[0]);
  const [clickedTextColor, setClickedTextColor] = useState(TEXT_COLOR_CHART[0]);
  const [clickedBgColor, setclickedBgColor] = useState(BG_COLOR_CHART[0]);
  const [isIconClicked, setIsIconClicked] = useState(false);
  const [fileName, setFileName] = useState(BG_COLOR_CHART[0]);
  const [presignedUrl, setPresignedUrl] = useState('');
  const [file, setFile] = useState<File>();
  const [modalOn, setModalOn] = useState(false);

  const putMutation = usePutPresignedUrl();
  const postMutation = usePostLecueNote();

  const handleClickCategory = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setclickedCategory(e.currentTarget.innerHTML);
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
      setclickedBgColor(e.currentTarget.id);
      setIsIconClicked(false);
    }
  };

  const handleClickedIcon = () => {
    setIsIconClicked(true);
  };

  const handleFn = async () => {
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
    });
    // 추후 수정 예정
    navigate(`/lecue-book`);
  };

  return (
    <S.Wrapper>
      {modalOn && (
        <CommonModal
          handleFn={handleFn}
          category="note_complete"
          setModalOn={setModalOn}
        />
      )}
      <Header headerTitle="레큐노트 작성" />
      <CreateNote
        clickedCategory={clickedCategory}
        clickedTextColor={clickedTextColor}
        clickedBgColor={clickedBgColor}
        isIconClicked={isIconClicked}
        contents={contents}
        imgFile={imgFile}
        uploadImage={(file) => setImgFile(file)}
        setFileName={setFileName}
        handleChangeFn={handleChangeContents}
        handleClickCategory={handleClickCategory}
        handleClickedColorBtn={handleClickedColorBtn}
        handleClickedIcon={handleClickedIcon}
        setPresignedUrl={setPresignedUrl}
        binaryImage={(file) => setImgFile2(file)}
        selectedFile={(file) => setFile(file)}
      />
      <Footer contents={contents} setModalOn={setModalOn} />
    </S.Wrapper>
  );
}

export default LecueNotePage;
