import Button from '../../../components/common/Button';
import usePatchNickname from '../../hooks/usePatchNickname';
import { isValidState } from '../../page';
import * as S from './SubmitButton.style';

type SubmitButtonProps = {
  isActive: boolean;
  token: string;
  nickname: string;
  setIsValid: React.Dispatch<React.SetStateAction<isValidState>>;
  isValid: string;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

function SubmitButton({
  isActive,
  token,
  nickname,
  setIsValid,
  setIsActive,
}: SubmitButtonProps) {
  const patchMutation = usePatchNickname({ setIsValid, setIsActive, token, nickname });

  const handelClickSubmitBtn = (token: string, nickname: string) => {
    const patchNickname = nickname.trim();

    patchMutation.mutate({
      nickname: patchNickname,
      token: token,
    });
  };

  return (
    <S.ButtonWrapper>
      <Button
        variant="complete"
        disabled={!isActive}
        onClick={() => handelClickSubmitBtn(token, nickname)}
      >
        완료
      </Button>
    </S.ButtonWrapper>
  );
}

export default SubmitButton;
