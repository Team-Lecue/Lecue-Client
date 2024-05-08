import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { QUERY_KEY } from '../../constants/queryKeys';
import { getMyBookList } from '../api/getMyBookList';

export default function useGetMyBookList() {
  const navigate = useNavigate();
  const { data: myBookList, isLoading } = useQuery(
    [QUERY_KEY.favorite.getLecueBookFavorite],
    () => getMyBookList(),
    {
      onError: () => {
        navigate('/error');
      },
      refetchOnWindowFocus: false,
    },
  );

  return { myBookList, isLoading };
}
