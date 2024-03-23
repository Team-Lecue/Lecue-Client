import EditButton from '../EditButton';
import * as S from './NicknameInput.style';

interface NicknameInputProps {
  nickname: string;
  changeNickname: (nickname: string) => void;
}

const handleClickEditButton = () => {};

function NicknameInput({ nickname, changeNickname }: NicknameInputProps) {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 8) {
      changeNickname(e.target.value);
    }
  };
  return (
    <S.NicknameInputWrapper>
      <S.InputContainer isEmpty={nickname.length === 0}>
        <S.Input
          type="text"
          placeholder="닉네임을 입력해주세요"
          value={nickname}
          onChange={handleChangeInput}
        />
        <S.WordCount>({nickname.length}/8)</S.WordCount>
      </S.InputContainer>
      <EditButton isActive={false} onClick={handleClickEditButton} />
    </S.NicknameInputWrapper>
  );
}

export default NicknameInput;
