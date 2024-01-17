import { useQuery } from 'react-query';

import { getMyBookList } from '../api/getMyBookList';

export default function useGetMyBookList() {
  const { data: myBookList } = useQuery(
    ['useGetMyBookList'],
    () => getMyBookList(),
    {
      onError: () => {
        console.error;
      },
    },
  );

  return { myBookList };
}
