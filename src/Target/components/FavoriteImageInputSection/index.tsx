import React from 'react';

import { FavoriteImageInputProps } from '../../types/targetTypes';
import FavoriteImageInput from '../FavoriteImageInput';
import * as S from './FavoriteImageInputSection.style';

function FavoriteImageInputSection({
  changeFileData,
}: FavoriteImageInputProps) {
  return (
    <S.FavoriteImageInputWrapper>
      <S.SectionTitle>사진 업로드</S.SectionTitle>
      <FavoriteImageInput changeFileData={changeFileData} />
    </S.FavoriteImageInputWrapper>
  );
}

export default React.memo(FavoriteImageInputSection);
