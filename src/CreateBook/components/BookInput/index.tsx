import { BookInputProps } from '../../type/createBookType';
import * as S from './BookInput.style';

function BookInput({ title, changeTitle }: BookInputProps) {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 10) {
      changeTitle(e.target.value);
    }
  };
  return (
    <S.TitleWrapper>
      <S.InputContainer isEmpty={title.length === 0}>
        <S.Input
          type="text"
          placeholder="레큐북의 제목을 입력해주세요"
          value={title}
          onChange={handleChangeInput}
        />
        <S.WordCount>({title.length}/10)</S.WordCount>
      </S.InputContainer>
    </S.TitleWrapper>
  );
}

export default BookInput;
