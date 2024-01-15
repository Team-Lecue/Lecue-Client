import { CreateNoteProps } from '../../type/lecueNoteType';
import SelectColor from '../SelectColor';
import WriteNote from '../WriteNote';
import * as S from './CreateNote.style';

function CreateNote({
  clickedCategory,
  clickedBgColor,
  clickedTextColor,
  isIconClicked,
  contents,
  setFileName,
  handleChangeFn,
  handleClickCategory,
  handleClickedColorBtn,
  handleClickedIcon,
  imgFile,
  uploadImage,
}: CreateNoteProps) {
  return (
    <S.Wrapper>
      <WriteNote
        imgFile={imgFile}
        isIconClicked={isIconClicked}
        clickedBgColor={clickedBgColor}
        clickedTextColor={clickedTextColor}
        contents={contents}
        handleChangeFn={handleChangeFn}
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
        uploadImage={uploadImage}
      />
    </S.Wrapper>
  );
}

export default CreateNote;
