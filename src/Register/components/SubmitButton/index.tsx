import Button from '../../../components/common/Button';
import usePatchNickname from '../../hooks/usePatchNickname';
import { SubmitButtonProps } from '../../types/registerTypes';
import * as S from './SubmitButton.style';

function SubmitButton(props: SubmitButtonProps) {
  const { isActive, nickname, handleSetIsValid, handleSetIsActive } = props;

  const patchMutation = usePatchNickname({
    handleSetIsValid,
    handleSetIsActive,
    nickname,
  });

  const handelClickSubmitBtn = (nickname: string) => {
    const patchNickname = nickname.trim();

    patchMutation.mutate({
      nickname: patchNickname,
    });
  };

  return (
    <S.ButtonWrapper>
      <Button
        variant="complete"
        disabled={!isActive}
        onClick={() => handelClickSubmitBtn(nickname)}
      >
        완료
      </Button>
    </S.ButtonWrapper>
  );
}

export default SubmitButton;
