import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import getPresignedUrl from '../api/getPresignedUrl';

const useGetPresignedUrl = (
  setPresignedUrl: React.Dispatch<React.SetStateAction<string>>,
  setFileName: React.Dispatch<React.SetStateAction<string>>,
) => {
  const navigate = useNavigate();

  const { isLoading, data } = useQuery({
    queryKey: ['get-presigned-url'],
    queryFn: () => getPresignedUrl(),
    onError: () => navigate('/error'),
    onSuccess: (data) => {
      setPresignedUrl(data.data.url);
      setFileName(data.data.fileName);
    },
    refetchOnWindowFocus: false,
  });

  return { isLoading, data };
};

export default useGetPresignedUrl;
