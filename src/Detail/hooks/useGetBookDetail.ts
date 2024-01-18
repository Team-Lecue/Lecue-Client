import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { getBookDetail } from '../api/getBookDetail';

export default function useGetBookDetail(bookUuid: string) {
  const navigate = useNavigate();
  const { data: bookDetail, isLoading } = useQuery(
    ['useGetBookDetail', bookUuid],
    () => getBookDetail(bookUuid),
    {
      onError: () => {
        navigate('/error');
      },
      refetchOnMount: 'always',
      refetchOnWindowFocus: false,
    },
  );

  return { bookDetail, isLoading };
}
