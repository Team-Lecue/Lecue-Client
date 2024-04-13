import React from 'react';

import {
  ImgMypageFavoriteLecueBook,
  ImgMypageLetter,
  ImgMypageMakeLecueBook,
} from '../../assets';
import Header from '../../components/common/Header';
import * as S from './HistoryEnter.style';

const HistoryEnterList = [
  {
    title: '즐겨찾기한 레큐북',
    variant: 'book',
    image: <ImgMypageFavoriteLecueBook />,
  },
  {
    title: '내가 만든 레큐북',
    variant: 'book',
    image: <ImgMypageMakeLecueBook />,
  },
  { title: '내가 남긴 레터', variant: 'letter', image: <ImgMypageLetter /> },
];

function HistoryEnter() {
  return (
    <React.Fragment>
      <Header headerTitle="내 기록 보기" />
      <S.HistoryEnterPageBodyWrapper>
        {HistoryEnterList.map((element) => {
          return (
            <S.Tab variant={element.variant} key={element.title}>
              <S.Text>{element.title}</S.Text>
              {element.image}
            </S.Tab>
          );
        })}
      </S.HistoryEnterPageBodyWrapper>
    </React.Fragment>
  );
}

export default HistoryEnter;
