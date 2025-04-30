import axios from 'axios';

import { putPresignedUrlProps } from '../type/lecueNoteType';

const putPresignedUrl = ({
  presignedUrl,
  binaryFile,
  fileType,
}: putPresignedUrlProps) => {
  const response = axios.put(presignedUrl, binaryFile, {
    headers: {
      'Content-Type': fileType,
    },
  });

  return response;
};

export default putPresignedUrl;
