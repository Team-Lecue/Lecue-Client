import { useState } from 'react';

import Header from '../../../components/common/Header';
import BookTypeBox from '../../components/BookTypeBox';
import * as S from './SelectBookPage.style';

function SelectBookPage() {
  const [selectedBox, setSelectedBox] = useState(0);
  const [isClickedSelectButton, setIsClickedSelectButton] = useState(false);

  console.log(selectedBox);
  return (
    <S.SelectBookPageWrapper>
      <Header headerTitle="레큐북 만들기" />
      <S.SelectBookPageBodyWrapper>
        <S.SelectBookContainer>
          <S.SectionTitle>레큐북 타입 선택</S.SectionTitle>
          <S.BookTypeContainer>
            <BookTypeBox
              onClick={() => setSelectedBox(selectedBox === 1 ? 0 : 1)}
              bookType={1}
              selectedBox={selectedBox}
              isClickedSelectButton={isClickedSelectButton}
            />
            <BookTypeBox
              onClick={() => setSelectedBox(selectedBox === 2 ? 0 : 2)}
              bookType={2}
              selectedBox={selectedBox}
              isClickedSelectButton={isClickedSelectButton}
            />
          </S.BookTypeContainer>
        </S.SelectBookContainer>
        <button
          onClick={() => setIsClickedSelectButton(!isClickedSelectButton)}
          style={{ position: 'absolute', bottom: '0' }}
        >
          클릭
        </button>
      </S.SelectBookPageBodyWrapper>
    </S.SelectBookPageWrapper>
  );
}

export default SelectBookPage;
