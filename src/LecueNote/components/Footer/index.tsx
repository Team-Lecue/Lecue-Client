import Button from '../../../components/common/Button';
import { api } from '../../../libs/api';
import { FooterProps } from '../../type/lecueNoteType';
import * as S from './Footer.style';

function Footer({ contents, fileName, textColor, bgColor }: FooterProps) {
  const color = textColor === '#FFF' ? 1 : 0;
  const handleClickBtn = () => {
    api
      .post(
        '/api/notes',
        {
          bookId: 1,
          content: `${contents}`,
          textColor: color,
          background: fileName ? `${fileName}` : `${bgColor}`,
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
          },
        },
      )
      .then((res) => console.log(res));
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
