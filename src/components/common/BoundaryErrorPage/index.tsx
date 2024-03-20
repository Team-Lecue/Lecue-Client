/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';

import { ImgError } from '../../../assets';
import * as S from './BoundaryErrorPage.style';

interface BoundaryErrorPageProps {
  resetError: () => void;
}

function BoundaryErrorPage({ resetError }: BoundaryErrorPageProps) {
  const navigate = useNavigate();

  const handleClickHomeButton = () => {
    resetError();
    navigate('/', { state: { step: 1 } });
  };

  return (
    <S.ErrorPageWrapper>
      <ImgError />
      <S.ErrorPageMessage>이런, 오류가 발생했어요</S.ErrorPageMessage>
      <S.HomeButton onClick={handleClickHomeButton}>홈 화면으로</S.HomeButton>
    </S.ErrorPageWrapper>
  );
}

export default BoundaryErrorPage;
