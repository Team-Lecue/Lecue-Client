import Button from '../../../components/common/Button';
import usePostLecueNote from '../../hooks/usePostLecueNote';
import { FooterProps } from '../../type/lecueNoteType';
import * as S from './Footer.style';

function Footer({ contents, fileName, textColor, bgColor, setModalOn }: FooterProps) {
  const postMutation = usePostLecueNote();

  const handleClickBtn = () => {
    postMutation.mutate({
      contents: contents,
      color: textColor,
      fileName: fileName,
      bgColor: bgColor,
      setModalOn: setModalOn
    });
  };

  return (
    <S.Wrapper>
      <Button
        variant="complete"
        disabled={contents.length === 0}
        onClick={handleClickBtn}
      >
        작성 완료
      </Button>
    </S.Wrapper>
  );
}

export default Footer;
