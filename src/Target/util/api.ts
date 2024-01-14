import { AxiosResponse } from 'axios';

import { api } from '../../libs/api';

interface PresignedUrlResponse {
  data: {
    url: string;
    filename: string;
  };
}

const getPresignedUrl = async (
  endpoint: string,
): Promise<{ url: string; filename: string }> => {
  const response: AxiosResponse<PresignedUrlResponse> = await api.get(endpoint);
  console.log(response);
  return {
    url: response.data.data.url,
    filename: response.data.data.filename,
  };
};

const uploadFile = async (
  url: string,
  data: ArrayBuffer,
  contentType: string,
): Promise<void> => {
  await api
    .put(url, data, {
      headers: {
        'Content-Type': contentType,
      },
    })
    .then((res) => {
      console.log(res);
    });
};

export { getPresignedUrl, uploadFile };
