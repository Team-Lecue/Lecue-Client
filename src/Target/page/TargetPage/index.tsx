import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../../components/common/Header';
import CompleteButton from '../../components/CompleteButton';
import FavoriteImageInput from '../../components/FavoriteImageInput';
import NameInput from '../../components/NameInput';
import * as S from './TargetPage.style';

function TargetPage() {
  const [imgFile, setImgFile] = useState('');
  const [presignedFileName, setPresignedFileName] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleClickCompleteButton = () => {
    navigate('/selectBtn');
  };

  return (
    <S.TargetPageWrapper>
      <Header headerTitle={'레큐북 만들기'} />
      <S.TargetPageBodyWrapper>
        <S.InputSectionWrapper>
          <S.NameInputWrapper>
            <S.SectionTitle>최애의 이름</S.SectionTitle>
            <NameInput name={name} changeName={(name) => setName(name)} />
          </S.NameInputWrapper>
          <S.FavoriteInputWrapper>
            <S.SectionTitle>최애의 사진 업로드</S.SectionTitle>
            <FavoriteImageInput
              imgFile={imgFile}
              uploadImage={(file) => setImgFile(file)}
              changePresignedFileName={(filename) =>
                setPresignedFileName(filename)
              }
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
