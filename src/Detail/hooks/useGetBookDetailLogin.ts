import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { getBookDetailLogin } from '../api/getBookDetailLogin';

export default function useGetBookDetailLogin(bookUuid: string) {
  const navigate = useNavigate();

  const { data: bookDetail, isLoading } = useQuery(
    ['useGetBookDetailLogin', bookUuid],
    () => getBookDetailLogin(bookUuid),
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
