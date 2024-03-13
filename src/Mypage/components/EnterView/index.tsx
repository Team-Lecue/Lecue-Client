import { IcArrowLeft } from '../../../assets';
import * as S from './EnterView.style';
function EnterView() {
  return (
    <div>
      <S.ProfileWrapper>
        <S.SubTitle>프로필</S.SubTitle>
        <S.Tab>
          <S.Text>닉네임 수정</S.Text>
          <IcArrowLeft />
        </S.Tab>
        <S.Tab>
          <S.Text>내 기록보기</S.Text>
          <IcArrowLeft />
        </S.Tab>
      </S.ProfileWrapper>
      <S.ServiceWrapper>
        <S.SubTitle>서비스 이용 방침</S.SubTitle>
        <S.Tab>
          <S.Text>팀 설명 보기</S.Text>
          <IcArrowLeft />
        </S.Tab>
        <S.Tab>
          <S.Text>공지사항</S.Text>
          <IcArrowLeft />
        </S.Tab>
        <S.Tab>
          <S.Text>문의하기</S.Text>
          <IcArrowLeft />
        </S.Tab>
      </S.ServiceWrapper>
      <S.OtherWrapper>
        <S.SubTitle>기타</S.SubTitle>
        <S.Tab>
          <S.Text>로그아웃</S.Text>

          <IcArrowLeft />
        </S.Tab>
        <S.Tab>
          <S.Text>탈퇴하기</S.Text>
          <IcArrowLeft />
        </S.Tab>
      </S.OtherWrapper>
    </div>
  );
}

export default EnterView;
