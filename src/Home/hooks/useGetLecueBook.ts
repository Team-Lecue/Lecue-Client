import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import getLecueBook from '../api/getLecueBook';
import { HOME_QUERY_KEY } from '../constants/homeQueryKey';

const useGetLecueBook = () => {
  const navigate = useNavigate();

  const { isLoading: isLoadingLecueBook, data: lecueBook } = useQuery({
    queryKey: HOME_QUERY_KEY.getLecueBook,
    queryFn: () => getLecueBook(),
    onError: () => navigate('/error'),
    refetchOnWindowFocus: false,
  });

  return { isLoading: isLoadingLecueBook, data: lecueBook };
};

export default useGetLecueBook;
