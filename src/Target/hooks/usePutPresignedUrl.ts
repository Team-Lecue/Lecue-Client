import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { putPresignedUrl } from '../util/api';

interface usePutPresignedUrlProps {
  url: string;
  data: ArrayBuffer;
  contentType: string;
}

const usePutPresignedUrl = () => {
  const mutation = useMutation({
    mutationFn: ({ url, data, contentType }: usePutPresignedUrlProps) => {
      return putPresignedUrl(url, data, contentType);
    },
    onError: (err: AxiosError) => console.log(err),
  });
  return mutation;
};

export default usePutPresignedUrl;
