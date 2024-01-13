import { IcCameraSmall } from '../../../assets';
import { BG_COLOR_CHART } from '../../constants/colorChart';
import { ShowColorChartProps } from '../../type/lecueNoteType';
import * as S from './ShowColorChart.style';

function ShowColorChart({
  isIconClicked,
  colorChart,
  state,
  handleFn,
  handleIconFn,
}: ShowColorChartProps) {
  return (
    <S.Wrapper>
      {colorChart === BG_COLOR_CHART && (
        <S.IconWrapper onClick={handleIconFn} $isIconClicked={isIconClicked}>
          <IcCameraSmall />
        </S.IconWrapper>
      )}
      {colorChart.map((colorCode) => (
        <S.ColorWrapper key={colorCode}>
          <S.Color
            type="button"
            id={colorCode}
            variant={state === colorCode}
            $isIconClicked={
              colorChart === BG_COLOR_CHART ? isIconClicked : false
            }
            $colorCode={colorCode}
            onClick={handleFn}
          ></S.Color>
        </S.ColorWrapper>
      ))}
    </S.Wrapper>
  );
}

export default ShowColorChart;
