import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../../components/common/Header';
import CompleteButton from '../../components/CompleteButton';
import FavoriteImageInput from '../../components/FavoriteImageInput';
import NameInput from '../../components/NameInput';
import { getPresignedUrl, uploadFile } from '../../util/api';
import * as S from './TargetPage.style';

function TargetPage() {
  const [presignedFileName, setPresignedFileName] = useState('');
  const [name, setName] = useState('');
  const [fileData, setFileData] = useState<File | null>(null); // Add this line
  const [presignedData, setPresignedData] = useState({
    url: '',
    fileName: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPresignedData = async () => {
      const { url, fileName } = await getPresignedUrl('/api/images/book');
      setPresignedData({ url, fileName });
      setPresignedFileName(fileName);
    };

    fetchPresignedData();
  }, []);

  const handleClickCompleteButton = async () => {
    if (fileData) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(fileData);
      reader.onloadend = async () => {
        if (reader.result !== null) {
          await uploadFile(
            presignedData.url,
            reader.result as ArrayBuffer,
            fileData.type,
          );
        }
      };
    }

    navigate('/select-book', {
      state: { presignedFileName: presignedFileName, name: name },
    });
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
              imgFile={fileData}
              changeFileData={(file) => setFileData(file)}
            />
          </S.FavoriteInputWrapper>
        </S.InputSectionWrapper>
        <CompleteButton
          isActive={fileData !== null && name.length !== 0}
          onClick={handleClickCompleteButton}
        />
      </S.TargetPageBodyWrapper>
    </S.TargetPageWrapper>
  );
}

export default TargetPage;
