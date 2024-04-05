import { EmptyViewProps } from '../../types/myPageType';
import * as S from './EmptyView.style';

function EmptyView({ clickedBtn }: EmptyViewProps) {
  return (
    <S.Wrapper>
      {clickedBtn === 'note' ? (
        <S.TextWrapper>
          <S.Text>아직 작성한</S.Text>
          <S.Text>레터가 없습니다.</S.Text>
        </S.TextWrapper>
      ) : (
        <S.TextWrapper>
          <S.Text>아직 제작한</S.Text>
          <S.Text>레큐북이 없습니다.</S.Text>
        </S.TextWrapper>
      )}
    </S.Wrapper>
  );
}

export default EmptyView;
