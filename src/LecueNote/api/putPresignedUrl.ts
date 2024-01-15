import { api } from '../../libs/api';
import { putPresignedUrlProps } from '../type/lecueNoteType';

const putPresignedUrl = ({
  presignedUrl,
  binaryFile,
  fileType,
}: putPresignedUrlProps) => {
  const response = api.put(presignedUrl, binaryFile, {
    headers: {
      'Content-Type': fileType,
    },
  });

  return response;
};

export default putPresignedUrl;
