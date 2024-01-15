import { api } from '../../libs/api';

const putPresignedUrl = (
  presignedUrl: string,
  binaryFile: string | ArrayBuffer,
  fileType: string,
) => {
  api.put(presignedUrl, binaryFile, {
    headers: {
      'Content-Type': fileType,
    },
  });
};

export default putPresignedUrl;
