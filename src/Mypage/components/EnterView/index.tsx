import { useNavigate } from 'react-router-dom';

import { IcArrowLeft } from '../../../assets';
import * as S from './EnterView.style';
function EnterView() {
  const navigate = useNavigate();

  const handleClickNickname = () => {
    navigate('/nickname');
  };

  const handleClickHistory = () => {
    navigate('/history');
  };

  const handleClickLogout = () => {
    //모달 띄우기(2차 스프린트)
    alert('로그아웃');
  };

  const handleClickUnsubscribe = () => {
    alert('탈퇴하기');
  };

  return (
    <div>
      <S.ProfileWrapper>
        <S.SubTitle>프로필</S.SubTitle>
        <S.Tab onClick={handleClickNickname}>
          <S.Text>닉네임 수정</S.Text>
          <IcArrowLeft />
        </S.Tab>
        <S.Tab onClick={handleClickHistory}>
          <S.Text>내 기록보기</S.Text>
          <IcArrowLeft />
        </S.Tab>
      </S.ProfileWrapper>
      <S.ServiceWrapper>
        <S.SubTitle>서비스 이용 방침</S.SubTitle>
        <S.Tab>
          <S.Link href="" rel="noreferrer">
            팀 설명 보기
          </S.Link>
          <IcArrowLeft />
        </S.Tab>
        <S.Tab>
          <S.Link
            href="https://rileybyeon.notion.site/TEAM-LECUE-b7801fe345544442938d3e54980032e4?pvs=4"
            target="_blank"
            rel="noreferrer"
          >
            공지사항
          </S.Link>
          <IcArrowLeft />
        </S.Tab>
        <S.Tab>
          <S.Link href="" rel="noreferrer">
            문의하기
          </S.Link>
          <IcArrowLeft />
        </S.Tab>
      </S.ServiceWrapper>
      <S.OtherWrapper>
        <S.SubTitle>기타</S.SubTitle>
        <S.Tab>
          <S.Text onClick={handleClickLogout}>로그아웃</S.Text>

          <IcArrowLeft />
        </S.Tab>
        <S.Tab onClick={handleClickUnsubscribe}>
          <S.Text>탈퇴하기</S.Text>
          <IcArrowLeft />
        </S.Tab>
      </S.OtherWrapper>
    </div>
  );
}

export default EnterView;
