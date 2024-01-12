import { useState } from 'react';

import Header from '../../../components/common/Header';
import CompleteButton from '../../components/CompleteButton';
import FavoriteImageInput from '../../components/FavoriteImageInput';
import NameInput from '../../components/NameInput';
import * as S from './TargetPage.style';

function TargetPage() {
  const [imgFile, setImgFile] = useState('');
  const [name, setName] = useState('');

  const handleClickCompleteButton = () => {
    // API 쏘기...
  };

  return (
    <S.TargetPageWrapper>
      <Header headerTitle={'레큐북 만들기'} />
      <S.TargetPageBodyWrapper>
        <S.InputSectionWrapper>
          <S.NameInputWrapper>
            <S.SectionTitle>누구를 위한 레큐북인가요?</S.SectionTitle>
            <NameInput name={name} changeName={(name) => setName(name)} />
          </S.NameInputWrapper>
          <S.FavoriteInputWrapper>
            <S.SectionTitle>최애의 사진 업로드</S.SectionTitle>
            <FavoriteImageInput
              imgFile={imgFile}
              uploadImage={(file) => setImgFile(file)}
            />
          </S.FavoriteInputWrapper>
        </S.InputSectionWrapper>
        <CompleteButton
          isActive={imgFile !== '' && name.length !== 0}
          onClick={handleClickCompleteButton}
        />
      </S.TargetPageBodyWrapper>
    </S.TargetPageWrapper>
  );
}

export default TargetPage;
