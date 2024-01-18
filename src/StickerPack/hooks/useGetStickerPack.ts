import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { getStickerPack } from '../api/getStickerPack';

export default function useGetStickerPack(bookId: number) {
  const navigate = useNavigate();

  const { data: stickerPack, isLoading } = useQuery(
    ['useGetStickerPack'],
    () => getStickerPack(bookId),
    {
      onError: () => {
        navigate('/error');
      },
    },
  );

  return { stickerPack, isLoading };
}
