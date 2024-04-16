import { ImgMyPageNotexist } from '../../../assets';
import { HistoryEmptyViewProps } from '../../types/historyType';
import * as S from './HistoryEmptyView.style';

function HistoryEmptyView({
  topLineText,
  bottomLineText,
}: HistoryEmptyViewProps) {
  return (
    <S.HistoryEmptyViewWrapper>
      <S.HistoryEmptyViewNotice>
        <ImgMyPageNotexist />
        <S.HistoryEmptyViewText>
          {topLineText}
          <br />
          {bottomLineText}
        </S.HistoryEmptyViewText>
      </S.HistoryEmptyViewNotice>
    </S.HistoryEmptyViewWrapper>
  );
}

export default HistoryEmptyView;
