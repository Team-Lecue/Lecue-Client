import Button from '../../../components/common/Button';
import usePatchNickname from '../../hooks/usePatchNickname';
import { EditButtonProps } from '../../types/editNicknameTypes';
import * as S from './EditButton.style';

function EditButton({
  isActive,
  nickname,
  handleSetIsValid,
  handleSetIsActive,
}: EditButtonProps) {
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
        type="button"
        variant="complete"
        disabled={!isActive}
        onClick={() => handelClickSubmitBtn(nickname)}
      >
        완료
      </Button>
    </S.ButtonWrapper>
  );
}

export default EditButton;
