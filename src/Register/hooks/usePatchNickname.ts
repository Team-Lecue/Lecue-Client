import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { patchNickname } from '../api/patchNickname';
import { isValidState } from '../page';

interface patchNicknameProps {
  token: string;
  nickname: string;
}

interface usePatchNicknameProps extends patchNicknameProps {
  setIsValid: React.Dispatch<React.SetStateAction<isValidState>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const usePatchNickname = (props: usePatchNicknameProps) => {
  const { setIsValid, setIsActive, token, nickname } = props;

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async ({ token, nickname }: patchNicknameProps) => {
      return await patchNickname(token, nickname);
    },
    onError: (err: AxiosError) => {
      const code = err.response?.status;
      if (code === 409) {
        // 닉네임 중복코드 : 409
        setIsValid('duplicate');
        setIsActive(false);
      } else {
        console.error('usePatchNickname', err.response?.data);
        navigate('/error');
      }
    },
    onSuccess: () => {
      window.localStorage.setItem('token', token);
      window.localStorage.setItem('nickname', nickname);
      if (sessionStorage.getItem('url') === '') {
        navigate('/', { state: { step: 1 } });
      } else {
        navigate(-4);
      }
    },
  });

  return mutation;
};

export default usePatchNickname;
