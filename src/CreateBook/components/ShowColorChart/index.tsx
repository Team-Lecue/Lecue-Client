import { ShowColorChartProps } from '../../type/createBookType';
import * as S from './ShowColorChart.style';

function ShowColorChart({ backgroundColor, handleFn }: ShowColorChartProps) {
  return (
    <S.Wrapper>
      <S.ColorWrapper>
        <S.Color
          type="button"
          $colorCode={'#F5F5F5'}
          onClick={() => handleFn('#F5F5F5')}
          variant={backgroundColor === '#F5F5F5'}
        ></S.Color>
      </S.ColorWrapper>
      <S.ColorWrapper>
        <S.Color
          type="button"
          $colorCode={'#191919'}
          onClick={() => handleFn('#191919')}
          variant={backgroundColor === '#191919'}
        ></S.Color>
      </S.ColorWrapper>
    </S.Wrapper>
  );
}

export default ShowColorChart;
