import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../../components/common/Header';
import LoadingPage from '../../../components/common/LoadingPage';
import CommonModal from '../../../components/common/Modal/CommonModal';
import CompleteButton from '../../components/CompleteButton';
import FavoriteImageInput from '../../components/FavoriteImageInput';
import NameInput from '../../components/NameInput';
import useGetPresignedUrl from '../../hooks/useGetPresignedUrl';
import usePutPresignedUrl from '../../hooks/usePutPresignedUrl';
import * as S from './TargetPage.style';

function TargetPage() {
  const [presignedFileName, setPresignedFileName] = useState('');
  const [name, setName] = useState('');
  const [fileData, setFileData] = useState<File | null>(null);
  const [escapeModal, setEscapeModal] = useState(false);
  const [presignedData, setPresignedData] = useState({
    url: '',
    fileName: '',
  });

  const navigate = useNavigate();

  const { data, isLoading } = useGetPresignedUrl();
  const putMutation = usePutPresignedUrl();

  useEffect(() => {
    if (
      sessionStorage.getItem('name') &&
      sessionStorage.getItem('name') !== null
    ) {
      const a = sessionStorage.getItem('name');
      if (typeof a === 'string') {
        setName(a);
      }
    }
  }, []);

  useEffect(() => {
    if (data) {
      const { url, fileName } = data;
      setPresignedData({ url, fileName });
      setPresignedFileName(fileName);
    }
  }, [data]);

  const handleClickCompleteButton = async () => {
    if (fileData) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(fileData);
      reader.onloadend = async () => {
        if (reader.result !== null) {
          putMutation.mutate({
            url: presignedData.url,
            data: reader.result as ArrayBuffer,
            contentType: fileData.type,
          });
        }
      };
    }

    sessionStorage.setItem('name', name);

    navigate('/select-book', {
      state: { presignedFileName: presignedFileName, name: name },
    });
  };

  return isLoading ? (
    <LoadingPage />
  ) : (
    <S.TargetPageWrapper>
      {escapeModal && (
        <CommonModal
          handleFn={() => navigate('/', { state: { step: 1 } })}
          category="book_escape"
          setModalOn={setEscapeModal}
        />
      )}
      <Header headerTitle="레큐북 제작" handleFn={() => setEscapeModal(true)} />
      <S.TargetPageBodyWrapper>
        <S.InputSectionWrapper>
          <S.NameInputWrapper>
            <S.SectionTitle>최애의 이름</S.SectionTitle>
            <NameInput name={name} changeName={(name) => setName(name)} />
          </S.NameInputWrapper>
          <S.FavoriteInputWrapper>
            <S.SectionTitle>최애의 사진 업로드</S.SectionTitle>
            <FavoriteImageInput changeFileData={(file) => setFileData(file)} />
          </S.FavoriteInputWrapper>
        </S.InputSectionWrapper>
        <CompleteButton
          isActive={
            (fileData !== null || sessionStorage.getItem('image') !== null) &&
            name.length !== 0
          }
          onClick={handleClickCompleteButton}
        />
      </S.TargetPageBodyWrapper>
    </S.TargetPageWrapper>
  );
}

export default TargetPage;
