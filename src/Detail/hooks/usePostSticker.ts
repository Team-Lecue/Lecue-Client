import usePostStickerState from '../../StickerAttach/hooks/usePostStickerState';
import { postedStickerType } from '../type/lecueBookType';

interface usePostStickerProps {
  bookUuid: string;
  heightFromBottom: number | null;
  stickerState: postedStickerType;
  bookId: number;
}

const usePostSticker = ({
  bookUuid,
  heightFromBottom,
  stickerState,
  bookId,
}: usePostStickerProps) => {
  const postMutation = usePostStickerState(bookUuid);

  const handleClickDone = () => {
    const { postedStickerId, positionX } = stickerState;

    if (heightFromBottom !== null) {
      postMutation.mutate({
        postedStickerId,
        bookId,
        positionX,
        positionY: heightFromBottom,
      });
    }
  };

  return handleClickDone;
};

export default usePostSticker;
