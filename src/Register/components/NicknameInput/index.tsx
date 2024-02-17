import { useEffect, useState } from 'react';

import { NicknameInputProps } from '../../types/registerTypes';
import handleChangeInput from '../../utils/handleCheckInput';
import * as S from './NicknameInput.style';

function NicknameInput(props: NicknameInputProps) {
  const { nickname, setNickname, setIsActive, isValid, setIsValid } = props;

  const [wordCnt, setWordCnt] = useState(0);

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
          onChange={(e) => {
            handleChangeInput({ setNickname, setWordCnt, setIsValid, e });
          }}
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
