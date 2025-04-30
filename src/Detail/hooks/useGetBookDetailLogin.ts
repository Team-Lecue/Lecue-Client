import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { QUERY_KEY } from '../../constants/queryKeys';
import { getBookDetailLogin } from '../api/getBookDetailLogin';

export default function useGetBookDetailLogin(bookUuid: string) {
  const navigate = useNavigate();

  const { data: bookDetail, isLoading } = useQuery(
    [QUERY_KEY.favorite.atLecueBookDetail, bookUuid],
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
