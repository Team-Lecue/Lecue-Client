import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import getPresignedUrl from '../api/getPresignedUrl';
import { getPresignedUrlProps } from '../type/lecueNoteType';

const useGetPresignedUrl = ({ presignedUrlDispatch }: getPresignedUrlProps) => {
  const navigate = useNavigate();
  const isUnmounted = useRef(false);

  useEffect(() => {
    isUnmounted.current = false;
    const fetchData = async () => {
      try {
        const { data } = await getPresignedUrl();

        presignedUrlDispatch({
          type: 'SET_PRESIGNED_URL',
          presignedUrl: data.url,
          filename: data.fileName,
        });
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
  }, []);
};

export default useGetPresignedUrl;
