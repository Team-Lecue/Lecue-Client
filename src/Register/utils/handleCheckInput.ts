import { CheckNicknameProps } from '../types/registerTypes';
import checkInputRange from './checkInputRange';

/** 8자 이하 & 한글, 영어, 숫자만 입력 가능하도록 & 첫번째 글자는 공백 불가능 체크 함수*/
const handleChangeInput = (props: CheckNicknameProps) => {
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

export default handleChangeInput;
