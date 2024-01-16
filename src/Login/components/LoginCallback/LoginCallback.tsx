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

        if (nickname === null) {
          navigate('/register', { state: { token: tokenDto.accessToken } });
        } else {
          window.localStorage.setItem('token', tokenDto.accessToken);
          window.localStorage.setItem('nickname', nickname);
        }
      } catch (error) {
        console.error('로딩-fetchData() 에러 발생:', error);
      }
    };

    fetchData();
  }, []);

  return <div>로딩중</div>;
}

export default LoginCallback;
