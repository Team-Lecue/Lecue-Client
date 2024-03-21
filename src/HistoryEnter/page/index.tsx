import React from 'react';

import Header from '../../components/common/Header';
import * as S from './HistoryEnter.style';

function HistoryEnter() {
  return (
    <React.Fragment>
      <Header headerTitle="내 기록 보기" />
      <S.HistoryEnterPageBodyWrapper>
        <S.Tab>즐겨찾기 한 레큐북</S.Tab>
        <S.Tab>내가 만든 레큐북</S.Tab>
        <S.Tab>내가 남긴 레큐노트</S.Tab>
      </S.HistoryEnterPageBodyWrapper>
    </React.Fragment>
  );
}

export default HistoryEnter;
