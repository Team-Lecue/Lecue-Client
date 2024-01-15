// import { useNavigate } from 'react-router-dom';

import { api } from '../../libs/api';

const postLecueNote = (
  contents: string,
  color: number,
  fileName: string,
  bgColor: string,
) => {
//   const navigate = useNavigate();

  api
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
};

export default postLecueNote;
