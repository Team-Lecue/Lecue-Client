import { IcNotice, ImgLogoLecue } from '../../../assets';
import * as S from './Main.style';

function Main() {
  const handleClickMakingBtn = () => {
    // 로그인 여부 판별 후 레큐북 생성으로 이동
    alert('레큐북 만들기 버튼 클릭');
  };

  const handleClickMypageBtn = () => {
    // 로그인 여부 판별 후 마이페이지로 이동
    alert('내 기록 보러가기 버튼 클릭');
  };

  return (
    <S.MainWrapper>
      <S.IconWrapper>
        <ImgLogoLecue />
        <a
          href="https://rileybyeon.notion.site/TEAM-LECUE-b7801fe345544442938d3e54980032e4?pvs=4"
          target="_blank"
          rel="noreferrer"
        >
          <IcNotice />
        </a>
      </S.IconWrapper>

      <S.ButtonWrapper>
        <S.Button type="button" variant onClick={handleClickMakingBtn}>
          레큐북 만들기
        </S.Button>
        <S.Button type="button" onClick={handleClickMypageBtn}>
          내 기록 보러가기
        </S.Button>
      </S.ButtonWrapper>
    </S.MainWrapper>
  );
}

export default Main;
