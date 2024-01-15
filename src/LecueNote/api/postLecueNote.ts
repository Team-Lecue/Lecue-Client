// import { useNavigate } from 'react-router-dom';

import { api } from '../../libs/api';
import { postLecueNoteProps } from '../type/lecueNoteType';

const postLecueNote = ({
  contents,
  color,
  fileName,
  bgColor,
}: postLecueNoteProps) => {
  //   const navigate = useNavigate();

  const response = api
    .post(
      '/api/notes',
      {
        bookId: 1,
        content: contents,
        textColor: color,
        background: fileName ? fileName : bgColor,
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

  return response;
};

export default postLecueNote;
