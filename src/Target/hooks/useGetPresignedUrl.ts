import { useQuery } from 'react-query';

import { getPresignedUrl } from '../util/api';

const useGetPresignedUrl = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['get-presigned-url'],
    queryFn: () => getPresignedUrl('/api/images/book'),
  });

  return { isLoading, error, data };
};

export default useGetPresignedUrl;
