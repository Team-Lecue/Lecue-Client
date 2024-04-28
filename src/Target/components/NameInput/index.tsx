import * as S from './NameInput.style';

interface NameInputProps {
  name: string;
  changeName: (name: string) => void;
}

function NameInput({ name, changeName }: NameInputProps) {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 15) {
      changeName(e.target.value);
    }
  };
  return (
    <S.NameWrapper>
      <S.InputContainer isEmpty={name.length === 0}>
        <S.Input
          type="text"
          placeholder="마음을 전하고 싶은 분은 누구인가요?"
          value={name}
          onChange={handleChangeInput}
        />
        <S.WordCount>({name.length}/15)</S.WordCount>
      </S.InputContainer>
    </S.NameWrapper>
  );
}

export default NameInput;
