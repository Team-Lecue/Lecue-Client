import Button from '../../../components/common/Button';
import usePostLecueNote from '../../hooks/usePostLecueNote';
import usePutPresignedUrl from '../../hooks/usePutPresignedUrl';
import { FooterProps } from '../../type/lecueNoteType';
import * as S from './Footer.style';

function Footer({
  contents,
  fileName,
  textColor,
  bgColor,
  imgFile2,
  presignedUrl,
  file,
  setModalOn,
}: FooterProps) {
  const putMutation = usePutPresignedUrl();
  const postMutation = usePostLecueNote();

  const handleClickBtn = () => {
    if (imgFile2) {
      if (imgFile2.result && file) {
        putMutation.mutate({
          presignedUrl: presignedUrl,
          binaryFile: imgFile2.result,
          fileType: file.type,
        });
      }
    }
    postMutation.mutate({
      contents: contents,
      color: textColor,
      fileName: fileName,
      bgColor: bgColor,
      setModalOn: setModalOn,
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
