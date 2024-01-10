import BgColor from '../BgColor';
import TextColor from '../TextColor';
import * as S from './SelectColor.style';

function SelectColor() {
  return (
    <S.Wrapper>
      <TextColor />
      <BgColor />
    </S.Wrapper>
  );
}

export default SelectColor;
