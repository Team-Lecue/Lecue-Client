import { useState } from 'react';

// component
import Button from '../../../components/common/Button/index.tsx';
import Header from '../../../components/common/Header/index.tsx';
import StickerList from '../../components/StickerList/index.tsx';
// type
import { stickerType } from '../../type/stickerPackType.ts';
// style
import * as S from './StickerPack.style.ts';

function StickerPack() {
  const [selectedStickerData, setSelectedStickerData] = useState<stickerType>({
    stickerId: 0,
    stickerImage: '',
  });

  const handleStickerClick = (stickerId: number) => {
    setIsSelectedId(stickerId);
  };

  const handleClickDone = () => {
    alert(`${isSelectedId}`);
  };

  return (
    <>
      <Header headerTitle="스티커팩" />
      <S.Body>
        <StickerList
          selectedStickerData={selectedStickerData}
          handleStickerClick={handleStickerClick}
        />
        <Button
          variant="choose"
          disabled={selectedStickerData.stickerImage === ''}
          onClick={handleClickDone}
        >
          선택 완료
        </Button>
      </S.Body>
    </>
  );
}

export default StickerPack;
