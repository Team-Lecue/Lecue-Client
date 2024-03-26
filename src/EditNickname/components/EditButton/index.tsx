import Button from '../../../components/common/Button';
import usePatchNickname from '../../hooks/usePatchNickname';
import { EditButtonProps } from '../../types/editNicknameTypes';
import * as S from './EditButton.style';

function EditButton({
  isActive,
  token,
  nickname,
  handleSetIsValid,
  handleSetIsActive,
}: EditButtonProps) {
  const patchMutation = usePatchNickname({
    handleSetIsValid,
    handleSetIsActive,
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

export default EditButton;
