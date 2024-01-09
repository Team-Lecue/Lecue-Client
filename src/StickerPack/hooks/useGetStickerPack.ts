import { useQuery } from 'react-query';

import { getStickerPack } from '../../libs/hooks/getStickerPack';

export default function useGetStickerPack() {
  const { data } = useQuery(['useGetStickerPack'], getStickerPack, {
    onError: () => {
      console.error;
    },
  });

  return { data };
}
