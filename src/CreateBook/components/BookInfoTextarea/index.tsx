import { BookInfoTextareaProps } from '../../type/createBookType';
import * as S from './BookInfoTextarea.style';

function BookInfoTextarea({
  description,
  changeDescription,
}: BookInfoTextareaProps) {
  const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 65) {
      changeDescription(e.target.value);
    }
  };
  return (
    <S.BookInfoWrapper>
      <S.TextareaContainer isEmpty={description.length === 0}>
        <S.Textarea
          placeholder="무엇에 대한 레큐북인가요?"
          value={description}
          onChange={handleChangeInput}
        />
        <S.WordCount>({description.length}/65)</S.WordCount>
      </S.TextareaContainer>
    </S.BookInfoWrapper>
  );
}

export default BookInfoTextarea;
