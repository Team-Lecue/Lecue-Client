import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { putPresignedUrl } from '../util/api';

interface usePutPresignedUrlProps {
  url: string;
  data: ArrayBuffer;
  contentType: string;
}

const usePutPresignedUrl = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: ({ url, data, contentType }: usePutPresignedUrlProps) => {
      return putPresignedUrl(url, data, contentType);
    },
    onError: () => navigate('/error'),
  });
  return mutation;
};

export default usePutPresignedUrl;
