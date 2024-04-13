import { CheckNicknameProps } from '../types/editNicknameTypes';
import checkInputRange from './checkInputRange';

/** 8자 이하 & 한글, 영어, 숫자만 입력 가능하도록 & 첫번째 글자는 공백 불가능 체크 함수*/
const handleChangeInput = (props: CheckNicknameProps) => {
  const { handleSetNickname, handleSetWordCnt, handleSetIsValid, e } = props;

  const input = e.target.value;

  if (e.target.value.length <= 8 && checkInputRange(input[input.length - 1])) {
    if (e.target.value.trim().length < 2) {
      handleSetNickname(e.target.value);
      handleSetWordCnt(e.target.value.length);
      handleSetIsValid('space');
    } else {
      handleSetNickname(e.target.value);
      handleSetIsValid('valid');
      handleSetWordCnt(e.target.value.length);
    }
  } else {
    e.target.value.length > 8
      ? handleSetIsValid('valid')
      : handleSetIsValid('special');
  }
};

export default handleChangeInput;
