import { CheckNicknameProps } from '../types/registerTypes';
import checkInputRange from './checkInputRange';

/** 8자 이하 & 한글, 영어, 숫자만 입력 가능하도록 & 첫번째 글자는 공백 불가능 체크 함수*/
const handleChangeInput = (props: CheckNicknameProps) => {
  const { handleSetNickname, handleSetWordCnt, handleSetIsValid, e } = props;

  const input = e.target.value;

  if (e.target.value.length <= 8 && checkInputRange(input[input.length - 1])) {
    if (e.target.value === ' ') {
      handleSetNickname('');
      handleSetWordCnt(0);
    } else {
      handleSetNickname(e.target.value);
      handleSetWordCnt(e.target.value.length);
    }
    handleSetIsValid('valid');
  } else {
    e.target.value.length > 8
      ? handleSetIsValid('valid')
      : handleSetIsValid('special');
  }
};

export default handleChangeInput;
