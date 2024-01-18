import * as S from './EmptyView.style';

interface EmptyViewProps {
  clickedBtn: string;
}

function EmptyView({ clickedBtn }: EmptyViewProps) {
  return (
    <S.Wrapper>
      {clickedBtn === 'note' ? (
        <S.Text>
          아직 작성한 <br /> 레큐노트가 없습니다.
        </S.Text>
      ) : (
        <S.Text>
          아직 제작한 <br /> 레큐북이 없습니다.
        </S.Text>
      )}
    </S.Wrapper>
  );
}

export default EmptyView;
