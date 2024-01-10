import { useQuery } from 'react-query';

import { getStickerPack } from '../../libs/hooks/getStickerPack';

export default function useGetStickerPack(bookId: number) {
  const { data: stickerPack } = useQuery(
    ['useGetStickerPack'],
    () => getStickerPack(bookId),
    {
      onError: () => {
        console.error;
      },
    },
  );

  return { stickerPack };
}
