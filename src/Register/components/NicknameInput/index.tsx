import React, { useEffect, useState } from 'react';

import { isValidState } from '../../page';
import * as S from './NicknameInput.style';

interface NicknameInputProps {
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setIsValid: React.Dispatch<React.SetStateAction<isValidState>>;
  isValid: string;
}

function NicknameInput(props: NicknameInputProps) {
  const { nickname, setNickname, setIsActive, isValid, setIsValid } = props;

  const [wordCnt, setWordCnt] = useState(0);

  /** 영어, 숫자, 문자, 공백인지 체크하는 정규식 함수 */
  const checkInputRange = (str: string) => {
    const regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣0-9a-zA-Z\s]/g;
    return regExp.test(str) || str.length === 0;
  };

  /** 8자 이하 & 한글, 영어, 숫자만 입력 가능하도록 & 첫번째 글자는 공백 불가능 체크 함수*/
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    if (
      e.target.value.length <= 8 &&
      checkInputRange(input[input.length - 1])
    ) {
      if (e.target.value === ' ') {
        setNickname('');
        setWordCnt(0);
      } else {
        setNickname(e.target.value);
        setWordCnt(e.target.value.length);
      }
      setIsValid('valid');
    } else {
      e.target.value.length > 8 ? setIsValid('valid') : setIsValid('special');
    }
  };

  useEffect(() => {
    wordCnt >= 2 ? setIsActive(true) : setIsActive(false);
  }, [wordCnt]);

  return (
    <S.NicknameWrapper>
      <S.Question>레큐에서 사용할 닉네임</S.Question>
      <S.InputContainer isEmpty={nickname.length === 0} isValid={isValid}>
        <S.Input
          type="text"
          value={nickname}
          placeholder="닉네임을 입력해주세요."
          onChange={handleChangeInput}
        />
        <S.WordCount>({wordCnt}/8)</S.WordCount>
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
    </S.NicknameWrapper>
  );
}

export default NicknameInput;
