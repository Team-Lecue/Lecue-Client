import useGetNoteList from '../../hooks/useGetMyNoteList';
import { MyLetterProps } from '../../types/historyType';
import HistoryEmptyView from '../HistoryEmptyView';
import MyLetter from '../MyLetter';
import * as S from './MyLetterList.style';

function MyLetterList() {
  const { myNoteList } = useGetNoteList();

  return (
    <S.MyLetterListWrapper>
      {myNoteList && myNoteList.length !== 0 ? (
        <S.GridViewWrapper>
          {myNoteList.map((letter: MyLetterProps) => {
            return <MyLetter key={letter.noteId} {...letter} />;
          })}
        </S.GridViewWrapper>
      ) : (
        <HistoryEmptyView
          topLineText={'아직 내가 남긴 레터가 없어요'}
          bottomLineText={'새로 남겨볼까요?'}
        />
      )}
    </S.MyLetterListWrapper>
  );
}

export default MyLetterList;
