import { api } from '../../libs/api';

const getPresignedUrl = async () => {
  const { data } = await api().get('/api/images/note');
  return data;
};

export default getPresignedUrl;
