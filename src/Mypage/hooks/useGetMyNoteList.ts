import { useQuery } from 'react-query';

import { getMyNoteList } from '../api/getMyNoteList';

export default function useGetNoteList() {
  const { data: myNoteList } = useQuery(
    ['useGetNoteList'],
    () => getMyNoteList(),
    {
      onError: () => {
        console.error;
      },
    },
  );

  return { myNoteList };
}
