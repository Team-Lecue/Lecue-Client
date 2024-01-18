import { api } from './../../libs/api';
const getNoteNum = async () => {
  const { data } = await api.get('/api/common/splash');
  return data;
};

export default getNoteNum;
