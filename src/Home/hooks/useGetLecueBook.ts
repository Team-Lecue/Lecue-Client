import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import getLecueBook from '../api/getLecueBook';

const useGetLecueBook = () => {
  const navigate = useNavigate();

  const { isLoading, data } = useQuery({
    queryKey: ['get-lecue-book'],
    queryFn: () => getLecueBook(),
    onError: () => navigate('/error'),
    refetchOnWindowFocus: false,
  });

  return { isLoading, data };
};

export default useGetLecueBook;
