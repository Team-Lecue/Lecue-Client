import { ImgMyPageNotexist } from '../../../assets';
import useGetNoteList from '../../hooks/useGetMyNoteList';
import { MyLetterType } from '../../types/historyType';
import MyLetter from '../MyLetter';
import * as S from './MyLetterList.style';

function MyLetterList() {
  const { myNoteList } = useGetNoteList();

  return (
    <S.MyLetterListWrapper>
      {myNoteList && myNoteList.length !== 0 ? (
        <S.GridViewWrapper>
          {myNoteList.map((letter: MyLetterType, idx: number) => {
            return (
              <MyLetter key={letter.noteId} letterIndex={idx} {...letter} />
            );
          })}
        </S.GridViewWrapper>
      ) : (
        <S.EmptyViewWrapper>
          <S.EmptyViewNotice>
            <ImgMyPageNotexist />
            <S.EmptyViewText>
              아직 내가 남긴 레터가 없어요 <br />
              새로 남겨볼까요?
            </S.EmptyViewText>
          </S.EmptyViewNotice>
        </S.EmptyViewWrapper>
      )}
    </S.MyLetterListWrapper>
  );
}

export default MyLetterList;
