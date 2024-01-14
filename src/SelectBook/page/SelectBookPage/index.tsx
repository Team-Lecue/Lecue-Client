import { useState } from 'react';

import { ImgBookBackgray, ImgBookOrange } from '../../../assets';
import Header from '../../../components/common/Header';
import BookTypeBox from '../../components/BookTypeBox';
import CompleteButton from '../../components/CompleteButton';
import MakeLecueBookButton from '../../components/MakeLecueBookButton';
import * as S from './SelectBookPage.style';

const basicLecueBookOptions = ['레큐노트 최대 100장', '텍스트 & 배경색 2종'];
const premiumLecueBookOptions = [
  '레큐노트 무제한',
  '레큐노트 배경색 6종',
  '스티커 꾸미기',
];

function SelectBookPage() {
  const [selectedBox, setSelectedBox] = useState(0);
  const [isClickedSelectButton, setIsClickedSelectButton] = useState(false);

  const handleClickCompleteButton = () => {
    setIsClickedSelectButton(true);
    setSelectedBox(2);
  };

  const handleClickMakeLecueBookButton = () => {
    // API 쏘기...
  };

  return (
    <S.SelectBookPageWrapper>
      <Header headerTitle="레큐북 만들기" />
      <S.SelectBookPageBodyWrapper>
        <S.SelectBookContainer>
          <S.SectionTitle>레큐북 타입 선택</S.SectionTitle>
          <S.BookTypeContainerWrapper>
            <S.BookTypeContainer>
              {isClickedSelectButton ? <S.StyledImgEvent /> : <></>}
              <BookTypeBox
                onClick={() => setSelectedBox(selectedBox === 1 ? 0 : 1)}
                bookType={1}
                bookTypeBoxTitle="베이직 레큐북"
                bookTypeBoxImg={<ImgBookBackgray />}
                bookTypeBoxPrice={0}
                selectedBox={selectedBox}
                isClickedSelectButton={isClickedSelectButton}
                bookTypeBoxOptionList={basicLecueBookOptions}
              />
              <BookTypeBox
                onClick={() => setSelectedBox(selectedBox === 2 ? 0 : 2)}
                bookType={2}
                bookTypeBoxTitle="프리미엄 레큐북"
                bookTypeBoxImg={<ImgBookOrange />}
                bookTypeBoxPrice={990}
                selectedBox={selectedBox}
                isClickedSelectButton={isClickedSelectButton}
                bookTypeBoxOptionList={premiumLecueBookOptions}
              />
            </S.BookTypeContainer>
          </S.BookTypeContainerWrapper>
        </S.SelectBookContainer>
        {isClickedSelectButton ? (
          <MakeLecueBookButton
            isActive={true}
            onClick={handleClickMakeLecueBookButton}
          />
        ) : (
          <CompleteButton
            isActive={selectedBox !== 0}
            onClick={handleClickCompleteButton}
          />
        )}
      </S.SelectBookPageBodyWrapper>
    </S.SelectBookPageWrapper>
  );
}

export default SelectBookPage;
