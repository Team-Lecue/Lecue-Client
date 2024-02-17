import { useState } from 'react';

import useGetLoginToken from '../../hooks/useGetLoginToken';
import usePostLoginToken from '../../hooks/usePostLoginToken';

function LoginCallback() {
  const [loginToken, setLoginToken] = useState('');

  const handleLoginToken = (token: string) => {
    setLoginToken(token);
  };

  const getMutation = useGetLoginToken({ handleLoginToken });
  const postMutation = usePostLoginToken();

  loginToken === '' ? getMutation.mutate() : postMutation.mutate(loginToken);

  return <></>;
}

export default LoginCallback;
