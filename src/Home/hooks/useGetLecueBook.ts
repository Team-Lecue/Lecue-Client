import { useQuery } from 'react-query';

import getLecueBook from '../api/getLecueBook';

const useGetLecueBook = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['get-lecue-book'],
    queryFn: () => getLecueBook(),
  });

  return { isLoading, error, data };
};

export default useGetLecueBook;
