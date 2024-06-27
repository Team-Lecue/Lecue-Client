import React from 'react';

import { NameInputProps } from '../../types/targetTypes';
import NameInput from '../NameInput';
import * as S from './NameInputSection.style';

function NameInputSection({ name, changeName }: NameInputProps) {
  return (
    <S.NameInputWrapper>
      <S.SectionTitle>이름 입력</S.SectionTitle>
      <NameInput name={name} changeName={changeName} />
    </S.NameInputWrapper>
  );
}

export default React.memo(NameInputSection);
