import { CheckNicknameProps } from '../types/registerTypes';

/** 영어, 숫자, 문자, 공백인지 체크하는 정규식 함수 */
const checkInputRange = (str: string) => {
  const regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣0-9a-zA-Z\s]/g;
  return regExp.test(str) || str.length === 0;
};

/** 8자 이하 & 한글, 영어, 숫자만 입력 가능하도록 & 첫번째 글자는 공백 불가능 체크 함수*/
export const handleChangeInput = (props: CheckNicknameProps) => {
  const { setNickname, setWordCnt, setIsValid, e } = props;

  const input = e.target.value;

  if (e.target.value.length <= 8 && checkInputRange(input[input.length - 1])) {
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
