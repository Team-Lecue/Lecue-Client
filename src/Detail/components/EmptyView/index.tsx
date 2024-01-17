import { ImgEmpty } from '../../../assets';
import * as S from './EmptyView.style';

function EmptyView() {
  return (
    <S.EmptyViewWrapper>
      <ImgEmpty />
      <S.EmptyViewTextWrapper>
        <S.EmptyViewText>아직 레큐노트가 없습니다.</S.EmptyViewText>
        <S.EmptyViewText>가장 먼저 작성해보세요!</S.EmptyViewText>
      </S.EmptyViewTextWrapper>
    </S.EmptyViewWrapper>
  );
}

export default EmptyView;
