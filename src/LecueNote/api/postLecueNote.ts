// import { useNavigate } from 'react-router-dom';

import { api } from '../../libs/api';
import { postLecueNoteProps } from '../type/lecueNoteType';

const postLecueNote = ({
  contents,
  color,
  fileName,
  bgColor,
  setModalOn,
}: postLecueNoteProps) => {
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
    .then(() => setModalOn(true));

  return response;
};

export default postLecueNote;
