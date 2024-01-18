import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import getNoteNum from '../api/getNoteNum';

const useGetNoteNum = () => {
  const navigate = useNavigate();
  const { isLoading, data } = useQuery({
    queryKey: ['get-note-num'],
    queryFn: () => getNoteNum(),
    onError: () => navigate('/error'),
  });

  return { isLoading, data };
};

export default useGetNoteNum;
