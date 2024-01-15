import axios from 'axios';

import {
  KAKAO_AUTH_URL,
  KAKAO_REDIRECT_URI,
  KAKAO_REST_API_KEY,
} from './oAuth';

export const getLoginToken = () => {
  const AUTHORIZE_CODE = new URL(window.location.href).searchParams.get('code');
  const GRANT_TYPE = 'authorization_code';

  // const navigate = useNavigate();

  if (AUTHORIZE_CODE) {
    axios
      .post(
        `${KAKAO_AUTH_URL}/token?grant_type=${GRANT_TYPE}&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${AUTHORIZE_CODE}`,
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
};
