import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { putPresignedUrl } from '../util/api';

interface putPresignedUrlProps {
  url: string;
  data: ArrayBuffer;
  contentType: string;
}

const usePutPresignedUrl = () => {
  const mutation = useMutation({
    mutationFn: ({ url, data, contentType }: putPresignedUrlProps) => {
      return putPresignedUrl(url, data, contentType);
    },
    onError: (err: AxiosError) => console.log(err),
  });
  return mutation;
};

export default usePutPresignedUrl;
