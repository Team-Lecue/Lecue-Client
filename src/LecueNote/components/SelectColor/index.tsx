import React from 'react';

import {
  BG_COLOR_CHART,
  CATEGORY,
  TEXT_COLOR_CHART,
} from '../../constants/colorChart';
import { SelectColorProps } from '../../type/lecueNoteType';
import ShowColorChart from '../ShowColorChart';
import * as S from './SelectColor.style';

function SelectColor({
  lecueNoteState,
  isIconClicked,
  presignedUrlDispatch,
  handleTransformImgFile,
  handleCategoryFn,
  handleColorFn,
  handleIconFn,
  selectedFile,
  handleIsLoading,
}: SelectColorProps) {
  const { textColor, background, category, contents } = lecueNoteState;

  return (
    <S.Wrapper>
      <S.CategoryWrapper>
        {CATEGORY.map((it) => {
          return (
            <S.Category
              key={it}
              type="button"
              name="category"
              variant={category === it}
              onClick={handleCategoryFn}
            >
              {it}
            </S.Category>
          );
        })}
      </S.CategoryWrapper>

      <ShowColorChart
        isIconClicked={isIconClicked}
        colorChart={category === '텍스트색' ? TEXT_COLOR_CHART : BG_COLOR_CHART}
        state={category === '텍스트색' ? textColor : background}
        contents={contents}
        handleTransformImgFile={handleTransformImgFile}
        presignedUrlDispatch={presignedUrlDispatch}
        selectedFile={selectedFile}
        handleFn={handleColorFn}
        handleIconFn={handleIconFn}
        handleIsLoading={handleIsLoading}
      />
    </S.Wrapper>
  );
}

export default React.memo(SelectColor);
