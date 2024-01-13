import { useState } from 'react';

import {
  BG_COLOR_CHART,
  CATEGORY,
  TEXT_COLOR_CHART,
} from '../../constants/colorChart';
import { CreateNoteProps } from '../../type/lecueNoteType';
import SelectColor from '../SelectColor';
import WriteNote from '../WriteNote';
import * as S from './CreateNote.style';

function CreateNote({ contents, handleChangeFn }: CreateNoteProps) {
  const [clickedCategory, setclickedCategory] = useState(CATEGORY[0]);
  const [clickedTextColor, setClickedTextColor] = useState(TEXT_COLOR_CHART[0]);
  const [clickedBgColor, setclickedBgColor] = useState(BG_COLOR_CHART[0]);
  const [isIconClicked, setIsIconClicked] = useState(false);

  const handleClickCategory = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setclickedCategory(e.currentTarget.innerHTML);
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
      <WriteNote
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
        handleCategoryFn={handleClickCategory}
        handleColorFn={handleClickedColorBtn}
        handleIconFn={handleClickedIcon}
      />
    </S.Wrapper>
  );
}

export default CreateNote;
