import Button from '../../../components/common/Button';
import { FooterProps } from '../../type/lecueNoteType';
import * as S from './Footer.style';

function Footer({ contents }: FooterProps) {
  return (
    <S.Wrapper>
      <Button variant="complete" disabled={contents.length === 0}>
        작성 완료
      </Button>
    </S.Wrapper>
  );
}

export default Footer;
