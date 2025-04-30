import React from 'react';

import Button from '../../../components/common/Button';
import { CompleteButtonProps } from '../../type/createBookType';
import * as S from './CompleteButton.style';

function CompleteButton({
  isActive,
  onClick,
  backgroundColor,
}: CompleteButtonProps) {
  return (
    <S.CompleteButtonWrapper>
      <Button
        variant="complete"
        disabled={!isActive}
        onClick={onClick}
        backgroundColor={backgroundColor}
      >
        제작 완료
      </Button>
    </S.CompleteButtonWrapper>
  );
}

export default React.memo(CompleteButton);
