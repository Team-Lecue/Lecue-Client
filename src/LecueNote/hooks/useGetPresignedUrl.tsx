import { useQuery } from 'react-query';

import getPresignedUrl from '../api/getPresignedUrl';

const useGetPresignedUrl = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['get-presigned-url'],
    queryFn: () => getPresignedUrl(),
  });

  return { isLoading, error, data };
};

export default useGetPresignedUrl;
