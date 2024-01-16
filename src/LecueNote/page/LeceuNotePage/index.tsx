import { useState } from 'react';

import Header from '../../../components/common/Header';
import CreateNote from '../../components/CreateNote';
import Footer from '../../components/Footer';
import {
  BG_COLOR_CHART,
  CATEGORY,
  TEXT_COLOR_CHART,
} from '../../constants/colorChart';
import * as S from './LecueNotePage.style';

function LecueNotePage() {
  const MAX_LENGTH = 1000;
  const [contents, setContents] = useState('');
  const [imgFile, setImgFile] = useState('');
  const [imgFile2, setImgFile2] = useState<FileReader>();
  const [clickedCategory, setclickedCategory] = useState(CATEGORY[0]);
  const [clickedTextColor, setClickedTextColor] = useState(TEXT_COLOR_CHART[0]);
  const [clickedBgColor, setclickedBgColor] = useState(BG_COLOR_CHART[0]);
  const [isIconClicked, setIsIconClicked] = useState(false);
  const [fileName, setFileName] = useState('');
  const [presignedUrl, setPresignedUrl] = useState('');
  const [file, setFile] = useState<File>();

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

  return (
    <S.Wrapper>
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
      <Footer
        file={file}
        contents={contents}
        fileName={fileName}
        textColor={clickedTextColor}
        bgColor={clickedBgColor}
        imgFile2={imgFile2}
        presignedUrl={presignedUrl}
      />
    </S.Wrapper>
  );
}

export default LecueNotePage;
