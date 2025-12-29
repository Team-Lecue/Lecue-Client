import { useEffect } from 'react';

import LoadingSpinner from '../../../../components/common/LoadingSpinner';
import * as S from './NoteLoading.style';

interface NoteLoadingProps {
  handleResetPrevImg: () => void;
}
const NoteLoading = ({ handleResetPrevImg }: NoteLoadingProps) => {
  useEffect(() => {
    handleResetPrevImg();
  }, []);

  return (
    <S.LoadingWrapper>
      <LoadingSpinner />
    </S.LoadingWrapper>
  );
};

export default NoteLoading;
