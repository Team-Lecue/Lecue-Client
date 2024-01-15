import { BOOK_TEXT_COLOR } from '../../constants/colorChart';
import { createBookType } from '../../type/createBookType';
import ShowColorChart from '../ShowColorChart';
import * as S from './SelectColor.style';

function SelectColor({
  clickedTextColor,
  handleCategoryFn,
  handleColorFn,
}: createBookType) {
  return (
    <S.Wrapper>
      <S.Category type="button" onClick={handleCategoryFn}>
        레큐북 배경색
      </S.Category>
      <ShowColorChart
        colorChart={BOOK_TEXT_COLOR}
        state={clickedTextColor}
        handleFn={handleColorFn}
      />
    </S.Wrapper>
  );
}

export default SelectColor;
