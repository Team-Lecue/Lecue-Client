import { AxiosResponse } from 'axios';

import { api } from '../../libs/api';

interface PresignedUrlResponse {
  data: {
    url: string;
    fileName: string;
  };

  // const getPresignedUrl = async () => {
  //   const { data } = await api.get('/api/images/note');
  //   return data;
  // };

  // export default getPresignedUrl;
}

const getPresignedUrl = async (): Promise<{
  url: string;
  fileName: string;
}> => {
  const response: AxiosResponse<PresignedUrlResponse> =
    await api.get('/api/images/book');
  console.log(response);
  return {
    url: response.data.data.url,
    fileName: response.data.data.fileName,
  };
};

const putPresignedUrl = async (
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

export { getPresignedUrl, putPresignedUrl };
