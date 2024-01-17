import { api } from '../../libs/api';
import { postLecueNoteProps } from '../type/lecueNoteType';

const postLecueNote = ({
  contents,
  color,
  fileName,
  bgColor,
  isIconClicked,
  setModalOn,
  setUuid,
}: postLecueNoteProps) => {
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
      setModalOn(true);
      setUuid(res.data.data.bookUuid);
    });

  return response;
};

export default postLecueNote;
