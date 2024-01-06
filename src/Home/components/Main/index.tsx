import { IcNotice, ImgLogoLecue } from '../../../assets';
import * as S from './Main.style';

function Main() {
  return (
    <S.MainWrapper>
      <S.IconWrapper>
        <button type="button">
          <ImgLogoLecue />
        </button>
        <button type="button">
          <IcNotice />
        </button>
      </S.IconWrapper>

      <S.ButtonWrapper>
        <S.Button type="button" variant={'making'}>
          레큐북 만들기
        </S.Button>
        <S.Button type="button" variant={'mypage'}>
          내 기록 보러가기
        </S.Button>
      </S.ButtonWrapper>
    </S.MainWrapper>
  );
}

export default Main;
