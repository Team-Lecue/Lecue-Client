import Button from '../../../components/common/Button';
import usePatchNickname from '../../hooks/usePatchNickname';
import { SubmitButtonProps } from '../../types/registerTypes';
import * as S from './SubmitButton.style';

function SubmitButton(props: SubmitButtonProps) {
  const { isActive, token, nickname, setIsValid, setIsActive } = props;

  const patchMutation = usePatchNickname({
    setIsValid,
    setIsActive,
    token,
    nickname,
  });

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
