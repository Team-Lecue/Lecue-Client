import Button from '../../../components/common/Button';
import * as S from './CompleteButton.style';

interface CompleteButtonProps {
  isActive: boolean;
  onClick: () => void;
  backgroundColor: string;
}

function CompleteButton({
  isActive,
  onClick,
  backgroundColor,
}: CompleteButtonProps) {
  return (
    <S.CompleteButtonWrapper>
      <Button variant="complete" disabled={!isActive} onClick={onClick} backgroundColor={backgroundColor}>
        완료
      </Button>
    </S.CompleteButtonWrapper>
  );
}

export default CompleteButton;
