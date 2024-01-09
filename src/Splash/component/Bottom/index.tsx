import * as S from './Bottom.style';

function Bottom() {
  const noteNum = 30;

  return (
    <S.BottomWrapper>
      <S.TextWrapper>
        <S.Text>지금까지 {noteNum}개의</S.Text>
        <S.Text>포스트잇이 붙여졌어요!</S.Text>
      </S.TextWrapper>

      <S.StartBtn type="button">시작하기</S.StartBtn>
    </S.BottomWrapper>
  );
}

export default Bottom;
