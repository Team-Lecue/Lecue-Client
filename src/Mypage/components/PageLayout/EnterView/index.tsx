import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { IcArrowLeft } from '../../../../assets';
import useGetMyNickName from '../../../hooks/useGetMyNickname';
import * as S from './EnterView.style';

function EnterView() {
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();
  const { state } = useLocation();

  if (state) {
    const { myNickName } = useGetMyNickName();
    if (nickname === '' || nickname !== myNickName) setNickname(myNickName);
  }

  const handleClickNickname = () => {
    navigate('edit-nickname');
  };

  const handleClickHistory = () => {
    navigate('select-history');
  };

  const handleClickLogin = () => {
    navigate('/login');
  };

  return (
    <React.Fragment>
      {state ? (
        <React.Fragment>
          <S.NicknameWrapper>
            <S.NicknameText>{nickname}님, 안녕하세요</S.NicknameText>
          </S.NicknameWrapper>

          <S.MenuWrapper>
            <S.SubTitle>프로필</S.SubTitle>
            <S.Tab onClick={handleClickNickname}>
              <S.Text>닉네임 수정</S.Text>
              <IcArrowLeft />
            </S.Tab>
            <S.Tab onClick={handleClickHistory}>
              <S.Text>내 기록보기</S.Text>
              <IcArrowLeft />
            </S.Tab>
          </S.MenuWrapper>
          <S.Line />

          <S.MenuWrapper>
            <S.SubTitle>서비스 이용 방침</S.SubTitle>
            <S.Link href="" rel="noreferrer">
              <S.Text>팀 설명 보기</S.Text>
              <IcArrowLeft />
            </S.Link>
            <S.Link
              href="https://rileybyeon.notion.site/TEAM-LECUE-b7801fe345544442938d3e54980032e4?pvs=4"
              target="_blank"
              rel="noreferrer"
            >
              <S.Text>공지사항</S.Text>
              <IcArrowLeft />
            </S.Link>
            <S.Link href="" rel="noreferrer">
              <S.Text>문의하기</S.Text>
              <IcArrowLeft />
            </S.Link>
          </S.MenuWrapper>

          <S.Line />
          <S.MenuWrapper>
            <S.SubTitle>기타</S.SubTitle>
            <S.Tab>
              <S.Text>로그아웃</S.Text>

              <IcArrowLeft />
            </S.Tab>
          </S.MenuWrapper>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <S.NicknameWrapper onClick={handleClickLogin} variant={'login'}>
            <S.NicknameText>로그인하세요</S.NicknameText>
            <IcArrowLeft />
          </S.NicknameWrapper>

          <S.MenuWrapper>
            <S.SubTitle>서비스 이용 방침</S.SubTitle>
            <S.Link href="" rel="noreferrer">
              <S.Text>팀 설명 보기</S.Text>
              <IcArrowLeft />
            </S.Link>
            <S.Link
              href="https://rileybyeon.notion.site/TEAM-LECUE-b7801fe345544442938d3e54980032e4?pvs=4"
              target="_blank"
              rel="noreferrer"
            >
              <S.Text>공지사항</S.Text>
              <IcArrowLeft />
            </S.Link>
            <S.Link href="" rel="noreferrer">
              <S.Text>문의하기</S.Text>
              <IcArrowLeft />
            </S.Link>
          </S.MenuWrapper>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default EnterView;
