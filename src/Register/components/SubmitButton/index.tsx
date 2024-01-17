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
  isValid,
  setIsActive,
}: SubmitButtonProps) {
  // const fetchData = async (token: string, nickname: string) => {
  //   try {
  //     const { code } = await patchNickname(token, nickname);

  //     if (code === 200) {
  //       window.localStorage.setItem('token', token);
  //       window.localStorage.setItem('nickname', nickname);
  //       // 상황별 라우팅
  //     }
  //   } catch (error) {
  //     console.log(error.response.data.code);
  //     // if (error.response.data.code === 409) {
  //     //   setIsValid('duplicate');
  //     //   setIsActive(false);
  //     // } else {
  //     //   console.error('닉네임 patch 과정에서 에러 발생:', error);
  //     // }
  //   }
  // };

  const patchMutation = usePatchNickname();

  const handelClickSubmitBtn = (nickname: string, token: string) => {
    // console.log(token, nickname);
    const patchNickname = nickname.trim();
    // console.log(`patchNickname: ${patchNickname}`);
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
