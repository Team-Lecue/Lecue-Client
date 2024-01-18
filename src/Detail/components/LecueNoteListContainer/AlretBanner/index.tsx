import { IcCaution } from '../../../../assets';
import Button from '../../../../components/common/Button';
import * as S from './AlertBanner.style';

interface AlertBannerProps {
  onClick: () => void;
}

function AlertBanner({ onClick }: AlertBannerProps) {
  return (
    <S.ButtonWrapper>
      <S.AlertBanner>
        <IcCaution />
        스티커는 한 번 붙이면 수정/삭제할 수 없습니다
      </S.AlertBanner>
      <Button variant="choose" onClick={onClick}>
        부착 완료
      </Button>
    </S.ButtonWrapper>
  );
}

export default AlertBanner;
