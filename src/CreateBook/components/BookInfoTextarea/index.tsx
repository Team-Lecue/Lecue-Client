import * as S from './BookInfoTextarea.style';

interface BookInfoTextareaProps {
  description: string;
  changeDescription: (description: string) => void;
}

function BookInfoTextarea({
  description,
  changeDescription,
}: BookInfoTextareaProps) {
  const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 85) {
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
        <S.WordCount>({description.length}/85)</S.WordCount>
      </S.TextareaContainer>
    </S.BookInfoWrapper>
  );
}

export default BookInfoTextarea;
