import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import getLecueBook from '../api/getLecueBook';

const useGetLecueBook = () => {
  const navigate = useNavigate();

  const { isLoading: isLoadingLecueBook, data: lecueBook } = useQuery({
    queryKey: ['get-lecue-book'],
    queryFn: () => getLecueBook(),
    onError: () => navigate('/error'),
    refetchOnWindowFocus: false,
  });

  return { isLoading: isLoadingLecueBook, data: lecueBook };
};

export default useGetLecueBook;
