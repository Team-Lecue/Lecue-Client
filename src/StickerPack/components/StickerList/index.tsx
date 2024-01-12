import { Fragment } from 'react';

import useGetStickerPack from '../../hooks/useGetStickerPack';
import { stickerPackType, stickerType } from '../../type/stickerPackType';
import * as S from './StickerList.style';

interface StickerListProps {
  isSelectedId: number | null;
  handleStickerClick: (stickerId: number) => void;
}

function StickerList(props: StickerListProps) {
  const { isSelectedId, handleStickerClick } = props;
  //TODO 임시 값 수정
  const { stickerPack } = useGetStickerPack(1);

  return (
    <S.Wrapper>
      {stickerPack?.length > 0 &&
        stickerPack.map((data: stickerPackType) => (
          <Fragment key={data.stickerCategory}>
            <S.Title>{data.stickerCategory}</S.Title>
            <S.StickerGridWrapper>
              {data.stickerList.map((sticker) => (
                <S.ImageWrapper
                  type="button"
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
          </Fragment>
        ))}
    </S.Wrapper>
  );
}

export default StickerList;
