import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import postLecueNote from '../api/postLecueNote';
import { postLecueNoteProps } from '../type/lecueNoteType';

const usePostLecueNote = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: ({
      contents,
      color,
      fileName,
      bgColor,
      isIconClicked,
      bookId,
    }: postLecueNoteProps) => {
      return postLecueNote({
        contents,
        color,
        fileName,
        bgColor,
        isIconClicked,
        bookId,
      });
    },
    onError:() => navigate('/error'),
  });
  return mutation;
};

export default usePostLecueNote;
