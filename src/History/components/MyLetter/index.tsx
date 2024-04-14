import * as S from './MyLetter.style';

function MyLetter() {
  return (
    <S.MyLetterWrapper>
      <S.MyLetterFavorite>MyLetter</S.MyLetterFavorite>
      <S.MyLetterTitle>첫 예능 라디오스타 축하해!</S.MyLetterTitle>
      <S.MyLetterContent>
        야야야양야야야양야양 다음에 웨비고? 다음에 디팟고? 다음에 웨비고? 다음에
        웨비
      </S.MyLetterContent>
      <S.MyLetterDate>2024. 01. 25</S.MyLetterDate>
    </S.MyLetterWrapper>
  );
}

export default MyLetter;
