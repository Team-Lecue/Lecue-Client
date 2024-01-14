import { useQuery } from 'react-query';

import { getBookDetail } from '../api/getBookDetail';

export default function useGetBookDetail() {
  const { data: bookDetail } = useQuery(
    ['useGetBookDetail'],
    () => getBookDetail(),
    {
      onError: () => {
        console.error;
      },
    },
  );

  return { bookDetail };
}
