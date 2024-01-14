import { useQuery } from 'react-query';

import { getBookDetail } from '../api/getBookDetail';

export default function useGetBookDetail() {
  const { data: bookDetail } = useQuery(
    ['useGetStickerPack'],
    () => getBookDetail(),
    {
      onError: () => {
        console.error;
      },
    },
  );

  return { bookDetail };
}
