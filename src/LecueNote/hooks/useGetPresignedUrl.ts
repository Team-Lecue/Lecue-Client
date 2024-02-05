import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import getPresignedUrl from '../api/getPresignedUrl';

const useGetPresignedUrl = (
  setPresignedUrl: React.Dispatch<React.SetStateAction<string>>,
  setFileName: React.Dispatch<React.SetStateAction<string>>,
) => {
  const navigate = useNavigate();
  const isUnmounted = useRef(false);

  useEffect(() => {
    isUnmounted.current = false;
    const fetchData = async () => {
      try {
        const { data } = await getPresignedUrl();

        setPresignedUrl(data.url);
        setFileName(data.fileName);
      } catch (error) {
        navigate('/error');
      }
    };

    if (!isUnmounted.current) {
      fetchData();
    }

    return () => {
      isUnmounted.current = true;
    };
  }, [navigate, setPresignedUrl, setFileName]);
};

export default useGetPresignedUrl;
