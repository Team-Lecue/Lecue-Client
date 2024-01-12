import * as S from './NameInput.style';

interface NameInputProps {
  name: string;
  changeName: (name: string) => void;
}

function NameInput({ name, changeName }: NameInputProps) {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 8) {
      changeName(e.target.value);
    }
  };
  return (
    <S.NameWrapper>
      <S.InputContainer isEmpty={name.length === 0}>
        <S.Input
          type="text"
          placeholder="이름을 입력해주세요."
          value={name}
          onChange={handleChangeInput}
        />
        <S.WordCount>({name.length}/8)</S.WordCount>
      </S.InputContainer>
    </S.NameWrapper>
  );
}

export default NameInput;
