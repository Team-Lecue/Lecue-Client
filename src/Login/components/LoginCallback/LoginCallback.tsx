import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getLoginToken } from '../../api/getLoginToken';
import { postLoginToken } from '../../api/postLoginToken';

function LoginCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokenRes = await getLoginToken();

        const { nickname, tokenDto } = await postLoginToken(tokenRes);

        if (nickname === null || nickname === '') {
          navigate('/register', { state: { token: tokenDto.accessToken } });
        } else {
          window.localStorage.setItem('token', tokenDto.accessToken);
          window.localStorage.setItem('nickname', nickname);

          if (sessionStorage.getItem('url') === '') {
            navigate('/', { state: { step: 1 } });
          } else {
            navigate(-4);
          }
        }
      } catch (error) {
        console.error('로딩-fetchData() 에러 발생:', error);
      }
    };

    fetchData();
  }, []);

  return <></>;
}

export default LoginCallback;
