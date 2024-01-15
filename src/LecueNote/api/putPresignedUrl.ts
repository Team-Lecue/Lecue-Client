import { api } from '../../libs/api';
import { putPresignedUrlProps } from '../type/lecueNoteType';

const putPresignedUrl = ({
  presignedUrl,
  binaryFile,
  fileType,
}: putPresignedUrlProps) => {
  api.put(presignedUrl, binaryFile, {
    headers: {
      'Content-Type': fileType,
    },
  });
};

export default putPresignedUrl;
