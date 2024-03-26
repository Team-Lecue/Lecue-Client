import { useEffect, useState } from 'react';

import { NicknameInputProps } from '../../types/editNicknameTypes';
import handleChangeInput from '../../utils/handleCheckInput';
import * as S from './NicknameInput.style';

function NicknameInput({
  nickname,
  isValid,
  handleSetNickname,
  handleSetIsActive,
  handleSetIsValid,
}: NicknameInputProps) {
  const [wordCnt, setWordCnt] = useState(0);
  const currentNickname: string = localStorage.getItem('nickname') || '';

  const handleSetWordCnt = (wordCnt: number) => {
    setWordCnt(wordCnt);
  };

  useEffect(() => {
    wordCnt >= 2 ? handleSetIsActive(true) : handleSetIsActive(false);
  }, [wordCnt]);

  return (
    <S.NicknameInputWrapper>
      <S.InputContainer isEmpty={nickname.length === 0} isValid={isValid}>
        <S.Input
          type="text"
          placeholder="닉네임을 입력해주세요"
          value={nickname}
          onChange={(e) => {
            handleChangeInput({
              handleSetNickname,
              handleSetWordCnt,
              handleSetIsValid,
              currentNickname,
              e,
            });
          }}
        />
        <S.WordCount>({nickname.length}/8)</S.WordCount>
      </S.InputContainer>
      {isValid === 'special' ? (
        <S.WarnigMsg>특수문자/이모지는 사용 불가능해요</S.WarnigMsg>
      ) : isValid === 'duplicate' ? (
        <S.WarnigMsg>이미 있는 닉네임이에요</S.WarnigMsg>
      ) : (
        isValid === 'space' && (
          <S.WarnigMsg>마지막 공백 제외 2자 이상 입력해주세요</S.WarnigMsg>
        )
      )}
    </S.NicknameInputWrapper>
  );
}

export default NicknameInput;