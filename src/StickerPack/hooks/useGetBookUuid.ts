import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { getBookUuid } from '../api/getBookUuid';

export default function useGetBookUuid(bookId: number) {
  const navigate = useNavigate();

  const { data: bookUuId, isLoading } = useQuery(
    ['useGetBookUuid'],
    () => getBookUuid(bookId),
    {
      onError: () => {
        navigate('/error');
      },
      refetchOnWindowFocus: false,
    },
  );

  return { bookUuId, isLoading };
}
