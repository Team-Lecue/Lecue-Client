import { StepProps } from '../../page/SplashPage';
import * as S from './Bottom.style';

function Bottom({ handleStep }: StepProps) {
  return (
    <S.BottomWrapper type="button" onClick={() => handleStep(1)}>
      시작하기
    </S.BottomWrapper>
  );
}

export default Bottom;
