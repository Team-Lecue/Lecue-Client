import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { getMyNoteList } from '../api/getMyNoteList';

export default function useGetNoteList() {
  const navigate = useNavigate();
  const { data: myNoteList, isLoading } = useQuery(
    ['useGetNoteList'],
    () => getMyNoteList(),
    {
      onError: () => {
        navigate('/error');
      },
      refetchOnWindowFocus: false,
    },
  );

  return { myNoteList, isLoading };
}
