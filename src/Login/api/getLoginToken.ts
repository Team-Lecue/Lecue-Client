import axios from 'axios';

import {
  KAKAO_BASE_URL,
  KAKAO_REDIRECT_URI,
  KAKAO_REST_API_KEY,
} from './oAuth';

export const getLoginToken = async () => {
  const AUTHORIZE_CODE = new URL(window.location.href).searchParams.get('code');
  const GRANT_TYPE = 'authorization_code';
  const POST_URL = `grant_type=${GRANT_TYPE}&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${AUTHORIZE_CODE}`;

  if (AUTHORIZE_CODE) {
    const response = await axios.post(`${KAKAO_BASE_URL}/token?${POST_URL}`, {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    });

    return response.data;
  }
};
