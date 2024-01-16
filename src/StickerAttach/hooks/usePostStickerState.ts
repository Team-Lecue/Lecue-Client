import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { postStickerState } from '../api/postStickerState';
import { postedStickerParams } from '../type/postStickerType';

const usePostStickerState = () => {
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
    onError: (err: AxiosError) => console.log(err),
  });
  return mutation;
};

export default usePostStickerState;
