import React from 'react';

import {
  ImgMypageFavoriteLecueBook,
  ImgMypageLetter,
  ImgMypageMakeLecueBook,
} from '../../assets';
import Header from '../../components/common/Header';
import * as S from './HistoryEnter.style';

function HistoryEnter() {
  return (
    <React.Fragment>
      <Header headerTitle="내 기록 보기" />
      <S.HistoryEnterPageBodyWrapper>
        <S.Tab variant="book">
          <S.Text>즐겨찾기 한 레큐북</S.Text>
          <ImgMypageFavoriteLecueBook />
        </S.Tab>
        <S.Tab variant="book">
          <S.Text>내가 만든 레큐북</S.Text>
          <ImgMypageMakeLecueBook />
        </S.Tab>
        <S.Tab variant="letter">
          <S.Text>내가 남긴 레큐노트</S.Text>
          <ImgMypageLetter />
        </S.Tab>
      </S.HistoryEnterPageBodyWrapper>
    </React.Fragment>
  );
}

export default HistoryEnter;
