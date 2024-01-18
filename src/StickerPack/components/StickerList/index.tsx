import { Fragment } from 'react';

import useGetStickerPack from '../../hooks/useGetStickerPack';
import { stickerPackType, stickerType } from '../../type/stickerPackType';
import * as S from './StickerList.style';

interface StickerListProps {
  selectedStickerData: stickerType;
  handleStickerClick: (newId: number, newImage: string) => void;
  bookId: number;
}

function StickerList(props: StickerListProps) {
  const { selectedStickerData, handleStickerClick, bookId } = props;
  const { stickerPack } = useGetStickerPack(bookId);

  return (
    <S.Wrapper>
      {stickerPack?.length > 0 &&
        stickerPack.map((data: stickerPackType) => (
          <Fragment key={data.stickerCategory}>
            <S.Title>{data.stickerCategory}</S.Title>
            <S.StickerGridWrapper>
              {data?.stickerList?.map((sticker) => (
                <S.ImageWrapper
                  type="button"
                  key={sticker.stickerId}
                  onClick={() =>
                    handleStickerClick(sticker.stickerId, sticker.stickerImage)
                  }
                  isSelected={
                    sticker.stickerId === selectedStickerData.stickerId
                  }
                >
                  <S.ImageComponent
                    src={sticker.stickerImage}
                    alt="스티커 이미지"
                  />
                </S.ImageWrapper>
              ))}
            </S.StickerGridWrapper>
          </Fragment>
        ))}
    </S.Wrapper>
  );
}

export default StickerList;
