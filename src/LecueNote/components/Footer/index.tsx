// import { useNavigate } from 'react-router-dom';

import Button from '../../../components/common/Button';
import { api } from '../../../libs/api';
import { FooterProps } from '../../type/lecueNoteType';
import * as S from './Footer.style';

function Footer({ contents, fileName, textColor, bgColor }: FooterProps) {
  // const navigate = useNavigate();
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
      .then((res) => {
        console.log(res);
        // 나중에 주석코드를 활성화시킬 예정!
        // navigate(`lecue-book/${res.data.data.bookUuid}`);
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
