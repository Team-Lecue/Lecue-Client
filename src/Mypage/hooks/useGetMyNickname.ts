import { useQuery } from 'react-query';

import { getMyNickName } from '../api/getMyNickName';

export default function useGetMyNickName() {
  const { data: myNickName } = useQuery(
    ['useGetMyNickName'],
    () => getMyNickName(),
    {
      onError: () => {
        console.error;
      },
    },
  );

  return { myNickName };
}
