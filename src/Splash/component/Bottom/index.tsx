import { useNavigate } from 'react-router-dom';

import { StepProps } from '../../page/SplashPage';
import * as S from './Bottom.style';

function Bottom({ handleStep }: StepProps) {
  const navigate = useNavigate();
  const handleLoginBtn = () => {
    navigate('/login');
  };

  return (
    <S.BottomWrapper>
      <S.StartBtn type="button" onClick={() => handleStep(1)}>
        시작하기
      </S.StartBtn>
      <S.LoginBtn type="button" onClick={handleLoginBtn}>
        로그인/회원가입
      </S.LoginBtn>
    </S.BottomWrapper>
  );
}

export default Bottom;
