import { useQuery } from 'react-query';

import { getBookUuid } from '../api/getBookUuid';

export default function useGetBookUuid(bookId: number) {
  const { data: bookUuId } = useQuery(
    ['useGetBookUuid'],
    () => getBookUuid(bookId),
    {
      onError: () => {
        console.error;
      },
    },
  );

  return { bookUuId };
}
