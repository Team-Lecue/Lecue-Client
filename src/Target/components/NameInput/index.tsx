import { useState } from 'react';

import * as S from './NameInput.style';

interface NameInputProps {
  wordCnt: number;
  changeWordLength: (wordCnt: number) => void;
}

function NameInput({ wordCnt, changeWordLength }: NameInputProps) {
  const [name, setName] = useState('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 8) {
      setName(e.target.value);
      changeWordLength(e.target.value.length);
    }
  };
  return (
    <S.NameWrapper>
      <S.InputContainer isEmpty={name.length === 0}>
        <S.Input
          type="text"
          placeholder="이름을 입력해주세요."
          value={name}
          onChange={handleChangeInput}
        />
        <S.WordCount>({wordCnt}/8)</S.WordCount>
      </S.InputContainer>
    </S.NameWrapper>
  );
}

export default NameInput;
