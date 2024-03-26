/** 영어, 숫자, 문자, 공백인지 체크하는 정규식 함수 */
const checkInputRange = (str: string) => {
  const regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣0-9a-zA-Z\s]/g;
  return regExp.test(str) || str.length === 0;
};

export default checkInputRange;
