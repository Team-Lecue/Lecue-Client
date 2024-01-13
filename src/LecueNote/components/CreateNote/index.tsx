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
    }
  };

  return (
    <S.Wrapper>
      <WriteNote
        clickedBgColor={clickedBgColor}
        clickedTextColor={clickedTextColor}
        contents={contents}
        handleChangeFn={handleChangeFn}
      />
      <SelectColor
        clickedCategory={clickedCategory}
        clickedTextColor={clickedTextColor}
        clickedBgColor={clickedBgColor}
        handleCategoryFn={handleClickCategory}
        handleColorFn={handleClickedColorBtn}
      />
    </S.Wrapper>
  );
}

export default CreateNote;
