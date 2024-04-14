import { MyLetterType } from '../../types/historyType';
import MyLetter from '../MyLetter';
import * as S from './MyLetterList.style';

function MyLetterList() {
  //   const { myNoteList } = useGetNoteList();

  const myNoteList = [
    {
      bookUuid: 'f358ce58-cca9-4e37-a5e5-37764e7a0ab0',
      favoriteName: '에스파',
      title: '광야 속 에스파👠',
      noteId: 4,
      content:
        'DO SOPT 33기 이끄느라 너무 수고 많았다\nDO SOPT 33기 이끄느라 너무 수고 많았다🥺\nDO SOPT 33기 이끄느라 너무 수고 많았다',
      noteDate: '2024.03.18',
      noteTextColor: '#000000',
      noteBackground: '#ffffff',
    },
    {
      bookUuid: 'f358ce58-cca9-4e37-a5e5-37764e7a0ab0',
      favoriteName: '에스파',
      title: '광야 속 에스파👠',
      noteId: 3,
      content:
        'DO SOPT 33기 이끄느라 너무 수고 많았다\nDO SOPT 33기 이끄느라 너무 수고 많았다🥺\nDO SOPT 33기 이끄느라 너무 수고 많았다',
      noteDate: '2024.03.18',
      noteTextColor: '#000000',
      noteBackground: '#ffffff',
    },
    {
      bookUuid: 'f358ce58-cca9-4e37-a5e5-37764e7a0ab0',
      favoriteName: '에스파',
      title: '광야 속 에스파👠',
      noteId: 2,
      content:
        'DO SOPT 33기 이끄느라 너무 수고 많았다\nDO SOPT 33기 이끄느라 너무 수고 많았다🥺\nDO SOPT 33기 이끄느라 너무 수고 많았다',
      noteDate: '2024.03.18',
      noteTextColor: '#000000',
      noteBackground: '#ffffff',
    },
    {
      bookUuid: 'f358ce58-cca9-4e37-a5e5-37764e7a0ab0',
      favoriteName: '에스파',
      title: '광야 속 에스파👠',
      noteId: 1,
      content:
        'DO SOPT 33기 이끄느라 너무 수고 많았다\nDO SOPT 33기 이끄느라 너무 수고 많았다🥺\nDO SOPT 33기 이끄느라 너무 수고 많았다',
      noteDate: '2024.03.18',
      noteTextColor: '#000000',
      noteBackground: '#ffffff',
    },
  ];

  return (
    <S.MyLetterListWrapper>
      {myNoteList && myNoteList.length !== 0 ? (
        <S.GridViewWrapper>
          {myNoteList.map((letter: MyLetterType, idx) => {
            return (
              <MyLetter key={letter.noteId} letterIndex={idx} {...letter} />
            );
          })}
        </S.GridViewWrapper>
      ) : (
        <div>레큐노트 0개</div>
      )}
    </S.MyLetterListWrapper>
  );
}

export default MyLetterList;
