import { useQuery } from 'react-query';

import { getBookDetail } from '../api/getBookDetail';

export default function useGetBookDetail(bookUuid: string) {
  const { data: bookDetail } = useQuery(
    ['useGetBookDetail', bookUuid],
    () => getBookDetail(bookUuid),
    {
      onError: () => {
        console.error;
      },
    },
  );

  return { bookDetail };
}
