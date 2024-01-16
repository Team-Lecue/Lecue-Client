import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { postStickerState } from '../api/postStickerState';
import { postedStickerParams } from '../type/postStickerType';

const usePostStickerState = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: ({
      postedStickerId,
      bookId,
      positionX,
      positionY,
    }: postedStickerParams) => {
      return postStickerState({
        postedStickerId,
        bookId,
        positionX,
        positionY,
      });
    },
    onSuccess: () => {
      navigate('/lecue-book');
      sessionStorage.removeItem('scrollPosition');
    },

    onError: (err: AxiosError) => console.log(err),
  });
  return mutation;
};

export default usePostStickerState;
