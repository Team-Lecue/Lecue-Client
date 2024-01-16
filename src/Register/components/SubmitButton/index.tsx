import Button from '../../../components/common/Button';
import * as S from './SubmitButton.style';

type SubmitButtonProps = {
  isActive: boolean;
  token: string;
  nickname: string;
};

function SubmitButton({ isActive }: SubmitButtonProps) {
  const handelClickSubmitBtn = (token: string, nickname: string) => {
    //닉네임 PATCH API 연결하기
  };

  return (
    <S.ButtonWrapper>
      <Button variant="complete" disabled={!isActive}>
        완료
      </Button>
    </S.ButtonWrapper>
  );
}

export default SubmitButton;
