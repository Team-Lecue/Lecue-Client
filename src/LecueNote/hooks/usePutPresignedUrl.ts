import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import putPresignedUrl from '../api/putPresignedUrl';
import { putPresignedUrlProps } from './../type/lecueNoteType';

const usePutPresignedUrl = () => {
  const mutation = useMutation({
    mutationFn: ({
      presignedUrl,
      binaryFile,
      fileType,
    }: putPresignedUrlProps) => {
      return putPresignedUrl({ presignedUrl, binaryFile, fileType });
    },
    onError: (err: AxiosError) => console.log(err),
  });
  return mutation;
};

export default usePutPresignedUrl;
