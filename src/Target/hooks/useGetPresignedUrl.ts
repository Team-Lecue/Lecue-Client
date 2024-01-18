import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { getPresignedUrl } from '../util/api';

const useGetPresignedUrl = () => {
  const navigate = useNavigate();
  const { isLoading, data } = useQuery({
    queryKey: ['get-presigned-url'],
    queryFn: () => getPresignedUrl(),
    onError: () => navigate('/error'),
    refetchOnWindowFocus: false,
  });

  return { isLoading, data };
};

export default useGetPresignedUrl;
