import { api } from '../../libs/api';
import { putPresignedUrlProps } from '../type/lecueNoteType';

const putPresignedUrl = async ({
  presignedUrl,
  binaryFile,
  fileType,
}: putPresignedUrlProps) => {
  const response = await api.put(presignedUrl, binaryFile, {
    headers: {
      'Content-Type': fileType,
    },
  });

  return response;
};

export default putPresignedUrl;
