import Button from '../../../components/common/Button';
import * as S from './SubmitButton.style';

type SubmitButtonProps = {
  isActive: boolean;
};

function SubmitButton({ isActive }: SubmitButtonProps) {
  return (
    <S.ButtonWrapper>
      <Button variant="complete" disabled={!isActive}>
        완료
      </Button>
    </S.ButtonWrapper>
  );
}

export default SubmitButton;
