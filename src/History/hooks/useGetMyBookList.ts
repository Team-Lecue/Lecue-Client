import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { getMyBookList } from '../api/getMyBookList';

export default function useGetMyBookList() {
  const navigate = useNavigate();
  const { data: myBookList, isLoading } = useQuery(
    ['get-my-lecueBook'],
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
