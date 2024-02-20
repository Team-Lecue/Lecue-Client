import { useState } from 'react';

import LoadingPage from '../../../components/common/LoadingPage';
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

  return <LoadingPage />;
}

export default LoginCallback;
