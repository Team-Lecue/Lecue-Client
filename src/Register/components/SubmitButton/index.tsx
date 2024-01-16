import Button from '../../../components/common/Button';
import { patchNickname } from '../../api/patchNickname';
import { isValidState } from '../../page';
import * as S from './SubmitButton.style';

type SubmitButtonProps = {
  isActive: boolean;
  token: string;
  nickname: string;
  setIsValid: React.Dispatch<React.SetStateAction<isValidState>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

function SubmitButton({
  isActive,
  token,
  nickname,
  setIsValid,
  setIsActive,
}: SubmitButtonProps) {
  const fetchData = async (token: string, nickname: string) => {
    try {
      const { code } = await patchNickname(token, nickname);

      if (code === 409) {
        // 중복 닉네임 처리
        setIsValid('duplicate');
        setIsActive(false);
      } else if (code === 200) {
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('nickname', nickname);
        // 상황별 라우팅
      }
    } catch (error) {
      console.error('Register: fetchData() 에러 발생:', error);
    }
  };

  const handelClickSubmitBtn = (token: string, nickname: string) => {
    fetchData(token, nickname.trim());
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
