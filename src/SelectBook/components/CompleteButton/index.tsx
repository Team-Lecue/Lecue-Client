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
        선택 완료
      </Button>
    </S.CompleteButtonWrapper>
  );
}

export default CompleteButton;
