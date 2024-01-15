import { AxiosResponse } from 'axios';

import { api } from '../../libs/api';

interface PresignedUrlResponse {
  data: {
    url: string;
    fileName: string;
  };
}

const getPresignedUrl = async (
  endpoint: string,
): Promise<{ url: string; fileName: string }> => {
  const response: AxiosResponse<PresignedUrlResponse> = await api.get(endpoint);
  return {
    url: response.data.data.url,
    fileName: response.data.data.fileName,
  };
};

const uploadFile = async (
  url: string,
  data: ArrayBuffer,
  contentType: string,
): Promise<void> => {
  await api.put(url, data, {
    headers: {
      'Content-Type': contentType,
    },
  });
};

export { getPresignedUrl, uploadFile };
