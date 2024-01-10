import * as S from './ShowColorChart.style';

interface ShowColorChartProps {
  colorChart: string[];
  state: string;
  handleFn: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function ShowColorChart({ colorChart, state, handleFn }: ShowColorChartProps) {
  return (
    <S.Wrapper>
      {colorChart.map((colorCode) => (
        <S.ColorWrapper>
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
