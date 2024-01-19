import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import putPresignedUrl from '../api/putPresignedUrl';
import { putPresignedUrlProps } from './../type/lecueNoteType';

const usePutPresignedUrl = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: ({
      presignedUrl,
      binaryFile,
      fileType,
    }: putPresignedUrlProps) => {
      return putPresignedUrl({ presignedUrl, binaryFile, fileType });
    },
    onError: () => navigate('/error'),
  });
  return mutation;
};

export default usePutPresignedUrl;
