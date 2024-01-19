import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { postStickerState } from '../api/postStickerState';
import { postedStickerParams } from '../type/postStickerType';

const usePostStickerState = (bookUuId: string) => {
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
      navigate(`/lecue-book/${bookUuId}`, { replace: true });
    },

    onError: () => navigate('/error'),
  });
  return mutation;
};

export default usePostStickerState;
