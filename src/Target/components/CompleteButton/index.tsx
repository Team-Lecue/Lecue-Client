import React from 'react';

import Button from '../../../components/common/Button';
import * as S from './CompleteButton.style';

interface CompleteButtonProps {
  isActive: boolean;
  onClick: () => void;
}

function CompleteButton({ isActive, onClick }: CompleteButtonProps) {
  return (
    <S.CompleteButtonWrapper>
      <Button variant="complete" disabled={!isActive} onClick={onClick}>
        다음
      </Button>
    </S.CompleteButtonWrapper>
  );
}

export default React.memo(CompleteButton);
