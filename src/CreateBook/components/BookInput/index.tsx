import React, { useEffect, useState } from 'react';

import * as S from './BookInput.style';

type setIsActiveProps = {
  handleSetActive: (num: number, t: boolean) => void;
  isTitle?: boolean;
};

function BookInput({ handleSetActive, isTitle }: setIsActiveProps) {
  const [wordCnt, setWordCnt] = useState(0);
  const [bookTitle, setBookTitle] = useState('');
  const [limitNum, setLimitNum] = useState(0);
  const ArrayNum = isTitle ? 0 : 1;

  /** 영어, 숫자, 문자, 공백인지 체크하는 정규식 함수 */
  const checkInputRange = (str: string) => {
    const regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣0-9a-zA-Z\s]/g;
    return regExp.test(str) || str.length === 0;
  };

  /** 8자 이하 & 한글, 영어, 숫자만 입력 가능하도록 & 첫번째 글자는 공백 불가능 체크 함수*/
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    if (
      e.target.value.length <= limitNum &&
      checkInputRange(input[input.length - 1])
    ) {
      if (e.target.value === ' ') {
        setBookTitle('');
        setWordCnt(0);
      } else {
        setBookTitle(e.target.value);
        setWordCnt(e.target.value.length);
      }
    }
  };

  useEffect(() => {
    wordCnt >= 2
      ? handleSetActive(ArrayNum, true)
      : handleSetActive(ArrayNum, false);
  }, [wordCnt]);

  useEffect(() => {
    if (isTitle) {
      setLimitNum(12);
    } else {
      setLimitNum(85);
    }
  }, []);

  return (
    <S.BookNameWrapper>
      <S.Question>{isTitle ? '레큐북 제목' : '레큐북 소개'}</S.Question>
      <S.InputContainer isEmpty={bookTitle.length === 0}>
        <S.InputWrapper isTitle={isTitle}>
          <S.Input
            type="text"
            value={bookTitle}
            placeholder={
              isTitle
                ? '레큐북의 제목을 입력해주세요'
                : '무엇에 대한 레큐북인가요?'
            }
            onChange={handleChangeInput}
          />
        </S.InputWrapper>
        <S.WordCount>
          ({wordCnt}/{limitNum})
        </S.WordCount>
      </S.InputContainer>
    </S.BookNameWrapper>
  );
}

export default BookInput;
