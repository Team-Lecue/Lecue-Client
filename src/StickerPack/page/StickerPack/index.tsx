import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// component
import Button from '../../../components/common/Button/index.tsx';
import Header from '../../../components/common/Header/index.tsx';
import LoadingPage from '../../../components/common/LoadingPage/index.tsx';
import StickerList from '../../components/StickerList/index.tsx';
import useGetBookUuid from '../../hooks/useGetBookUuid.ts';
import useGetStickerPack from '../../hooks/useGetStickerPack.ts';
// type
import { stickerType } from '../../type/stickerPackType.ts';
// style
import * as S from './StickerPack.style.ts';

function StickerPack() {
  const navigate = useNavigate();
  const location = useLocation();

  const { bookId } = location.state;

  const [selectedStickerData, setSelectedStickerData] = useState<stickerType>({
    stickerId: 0,
    stickerImage: '',
  });

  const handleStickerClick = (newId: number, newImage: string) => {
    setSelectedStickerData((prevState) => ({
      ...prevState,
      stickerId: newId,
      stickerImage: newImage,
    }));
  };

  const { bookUuId } = useGetBookUuid(bookId);
  const { isLoading } = useGetBookUuid(bookId) || useGetStickerPack(bookId);

  const handleClickDone = () => {
    navigate(`/sticker-attach/${bookUuId}`, {
      state: { sticker: selectedStickerData },
    });
  };

  return isLoading ? (
    <LoadingPage />
  ) : (
    <S.Wrapper>
      <Header headerTitle="스티커팩" />
      <S.Body>
        <StickerList
          bookId={bookId}
          selectedStickerData={selectedStickerData}
          handleStickerClick={handleStickerClick}
        />
      </S.Body>
      <S.ButtonWrapper>
        <Button
          variant="choose"
          disabled={selectedStickerData.stickerImage === ''}
          onClick={handleClickDone}
        >
          선택 완료
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

export default StickerPack;
