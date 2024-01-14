import Button from '../../../components/common/Button';
import * as S from './Footer.style';

function Footer() {
  return (
    <S.Wrapper>
      <Button variant="complete" disabled={true}>
        작성 완료
      </Button>
    </S.Wrapper>
  );
}

export default Footer;
