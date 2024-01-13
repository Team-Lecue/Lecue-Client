import { ShowColorChartProps } from '../../type/lecueNoteType';
import * as S from './ShowColorChart.style';

function ShowColorChart({ colorChart, state, handleFn }: ShowColorChartProps) {
  return (
    <S.Wrapper>
      {colorChart.map((colorCode) => (
        <S.ColorWrapper key={colorCode}>
          <S.Color
            type="button"
            id={colorCode}
            variant={state === colorCode}
            $colorCode={colorCode}
            onClick={handleFn}
          ></S.Color>
        </S.ColorWrapper>
      ))}
    </S.Wrapper>
  );
}

export default ShowColorChart;
