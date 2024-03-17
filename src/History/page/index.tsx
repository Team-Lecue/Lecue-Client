import { useState } from 'react';

import { IcArrowDownBlack } from '../../assets';
import Header from '../../components/common/Header';
import SelectModal from '../components/SelectModal';
import { optionList } from '../constants/optionList';
import * as S from './History.style';

function History() {
  const [modalOn, setModalOn] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  const handleClickHistorySelectButton = () => {
    setModalOn(true);
  };

  return (
    <S.HistoryPageWrapper>
      {modalOn && (
        <SelectModal
          modalOn={modalOn}
          closeModal={() => setModalOn(false)}
          selectOption={(option: number) => setSelectedOption(option)}
          selectedModalOptionList={[0, 1, 2].filter(
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
      </S.HistoryPageBodyWrapper>
    </S.HistoryPageWrapper>
  );
}

export default History;
