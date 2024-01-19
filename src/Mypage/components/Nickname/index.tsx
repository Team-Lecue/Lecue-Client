import { ImgStarPosit } from '../../../assets';
import useGetMyNickName from '../../hooks/useGetMyNickname';
import * as S from './Nickname.style';

function Nickname() {
  const { myNickName } = useGetMyNickName();
  return (
    <S.NicknameWrapper>
      <ImgStarPosit />
      <S.Nickname>{myNickName} 님</S.Nickname>
    </S.NicknameWrapper>
  );
}

export default Nickname;
