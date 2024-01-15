import { api } from '../../libs/api';
import { getPresignedUrlPrps } from '../type/lecueNoteType';

const getPresignedUrl = ({
  setPresignedUrl,
  setFileName,
}: getPresignedUrlPrps) => {
  api.get('/api/images/note').then((res) => {
    setPresignedUrl(res.data.data.url);
    setFileName(res.data.data.fileName);
  });
};

export default getPresignedUrl;
