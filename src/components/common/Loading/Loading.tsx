import axios from 'axios';
import { useEffect } from 'react';

import {
  KAKAO_BASE_URL,
  KAKAO_REDIRECT_URI,
  KAKAO_REST_API_KEY,
} from '../../../Login/api/oAuth';

function Loading() {
  const AUTHORIZE_CODE = new URL(window.location.href).searchParams.get('code');
  const GRANT_TYPE = 'authorization_code';

  // const navigate = useNavigate();

  useEffect(() => {
    if (AUTHORIZE_CODE) {
      axios
        .post(
          `${KAKAO_BASE_URL}/token?grant_type=${GRANT_TYPE}&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${AUTHORIZE_CODE}`,
          {},
          {
            headers: {
              'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
          },
        )
        .then((res) => {
          console.log(res.data);
        });
    }
  }, []);

  return <div>로딩중.....ㅋ</div>;
}

export default Loading;
