import { api } from '../../libs/api';
import { postLecueNoteProps } from '../type/lecueNoteType';

const postLecueNote = ({
  contents,
  color,
  fileName,
  bgColor,
  isIconClicked,
  bookId,
}: postLecueNoteProps) => {
  const token = localStorage.getItem('token');

  const response = api.post(
    '/api/notes',
    {
      bookId: bookId,
      content: contents,
      textColor: color,
      background: isIconClicked ? fileName : bgColor,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response;
};

export default postLecueNote;
