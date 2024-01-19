import Button from '../../../components/common/Button';
import * as S from './MakeLecueBookButton.style';

interface MakeLecueBookButtonProps {
  isActive: boolean;
  onClick: () => void;
}

function MakeLecueBookButton({ isActive, onClick }: MakeLecueBookButtonProps) {
  return (
    <S.MakeLecueBookButtonWrapper>
      <Button variant="choose" disabled={!isActive} onClick={onClick}>
        다음
      </Button>
    </S.MakeLecueBookButtonWrapper>
  );
}

export default MakeLecueBookButton;
