import { useState } from 'react';

// component
import Button from '../../../components/common/Button/index.tsx';
import Header from '../../../components/common/Header/index.tsx';
import StickerList from '../../components/StickerList/index.tsx';
// style
import * as S from './StickerPack.style.ts';

function StickerPack() {
  const [isSelectedId, setIsSelectedId] = useState<number | null>(null);
  const handleClickDone = () => {
    alert(`${isSelectedId}`);
  };
  return (
    <>
      <Header headerTitle="스티커팩" isDarkMode />
      <S.Body>
        <StickerList
          isSelectedId={isSelectedId}
          setIsSelectedId={setIsSelectedId}
        />
        <Button
          variant="choose"
          disabled={isSelectedId == null}
          onClick={handleClickDone}
        >
          선택 완료
        </Button>
      </S.Body>
    </>
  );
}

export default StickerPack;
