import React from 'react';

import useGetStickerPack from '../../hooks/useGetStickerPack';
import { stickerPackType } from '../../type/stickerPackType';
import * as S from './StickerList.style';

interface StickerListProps {
  isSelectedId: number | null;
  handleStickerClick: (stickerId: number) => void;
}

function StickerList(props: StickerListProps) {
  const { isSelectedId, handleStickerClick } = props;
  const { stickerPack } = useGetStickerPack();

  return (
    <S.Wrapper>
      {stickerPack.map((data: stickerPackType) => (
        <React.Fragment key={data.stickerCategory}>
          <S.Title>{data.stickerCategory}</S.Title>
          <S.StickerGridWrapper>
            {data.stickerList.map((sticker) => (
              <S.ImageWrapper
                key={sticker.stickerId}
                onClick={() => handleStickerClick(sticker.stickerId)}
                isSelected={sticker.stickerId === isSelectedId}
              >
                <S.ImageComponent
                  src={sticker.stickerImage}
                  alt="스티커 이미지"
                />
              </S.ImageWrapper>
            ))}
          </S.StickerGridWrapper>
        </React.Fragment>
      ))}
    </S.Wrapper>
  );
}

export default StickerList;
