import { useNavigate } from 'react-router-dom';
import { api } from '../../libs/api';
import { postLecueNoteProps } from '../type/lecueNoteType';

const postLecueNote = ({
  contents,
  color,
  fileName,
  bgColor,
  isIconClicked,
  uuid,
  setUuid,
}: postLecueNoteProps) => {
  const navigate = useNavigate();
  const response = api
    .post(
      '/api/notes',
      {
        bookId: 1,
        content: contents,
        textColor: color,
        background: isIconClicked ? fileName : bgColor,
      },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
        },
      },
    )
    .then((res) => {
      setUuid(res.data.data.bookUuid);
      navigate(`/lecue-book/${uuid}`);
    });

  return response;
};

export default postLecueNote;
