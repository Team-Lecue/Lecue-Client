import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { IcArrowDownBlack } from '../../assets';
import Header from '../../components/common/Header';
import MyFavoriteBookList from '../components/MyFavoriteBookList';
import MyLecueBookList from '../components/MyLecueBookList';
import MyLetterList from '../components/MyLetterList';
import SelectModal from '../components/SelectModal';
import { optionList } from '../constants/optionList';
import * as S from './History.style';

function History() {
  const location = useLocation();

  const [modalOn, setModalOn] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number>(location.state);
  const handleClickHistorySelectButton = () => {
    setModalOn(true);
  };

  return (
    <React.Fragment>
      {modalOn && (
        <SelectModal
          modalOn={modalOn}
          closeModal={() => setModalOn(false)}
          selectOption={(option: number) => setSelectedOption(option)}
          selectedModalOptionList={[1, 2, 3].filter(
            (num) => num !== selectedOption,
          )}
        />
      )}
      <Header headerTitle="내 기록보기" />
      <S.HistoryPageBodyWrapper>
        <S.HistorySelectButton
          type="button"
          onClick={handleClickHistorySelectButton}
        >
          <S.CurrentHistoryOption>
            {optionList[selectedOption]}
          </S.CurrentHistoryOption>
          <IcArrowDownBlack />
        </S.HistorySelectButton>
        {
          {
            1: <MyFavoriteBookList />,
            2: <MyLecueBookList />,
            3: <MyLetterList />,
          }[selectedOption]
        }
      </S.HistoryPageBodyWrapper>
    </React.Fragment>
  );
}

export default History;
