import { api } from '../../libs/api';

const getPresignedUrl = (
  setPresignedUrl: React.Dispatch<React.SetStateAction<string>>,
  setFileName: React.Dispatch<React.SetStateAction<string>>,
) => {
  api.get('/api/images/note').then((res) => {
    setPresignedUrl(res.data.data.url);
    setFileName(res.data.data.fileName);
  });
};

export default getPresignedUrl;
