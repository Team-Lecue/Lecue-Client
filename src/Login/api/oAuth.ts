export const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;
export const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
export const KAKAO_BASE_URL = import.meta.env.VITE_KAKAO_BASE_URL;

export const KAKAO_AUTH_URL = `${KAKAO_BASE_URL}/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`;
