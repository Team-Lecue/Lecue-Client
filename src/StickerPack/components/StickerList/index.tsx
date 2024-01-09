import React from 'react';

import * as S from './StickerList.style';

interface StickerListProps {
  isSelectedId: number | null;
  handleStickerClick: (stickerId: number) => void;
}

function StickerList(props: StickerListProps) {
  const { isSelectedId, handleStickerClick } = props;

  return (
    <S.Wrapper>
      {MockSticker.map((data) => (
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

const MockSticker = [
  {
    stickerCategory: '레큐잉',
    stickerInfoList: [
      {
        stickerId: 1,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=1',
      },
      {
        stickerId: 2,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=2',
      },
      {
        stickerId: 3,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=3',
      },
      {
        stickerId: 4,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=4',
      },
      {
        stickerId: 5,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=5',
      },
      {
        stickerId: 6,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=6',
      },
      {
        stickerId: 7,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=7',
      },
      {
        stickerId: 8,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=8',
      },
      {
        stickerId: 9,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=9',
      },
      {
        stickerId: 10,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=10',
      },
      {
        stickerId: 11,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=11',
      },
      {
        stickerId: 12,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=12',
      },
      {
        stickerId: 13,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=13',
      },
      {
        stickerId: 14,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=14',
      },
      {
        stickerId: 15,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=15',
      },
      {
        stickerId: 16,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=16',
      },
      {
        stickerId: 17,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=17',
      },
      {
        stickerId: 18,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=18',
      },
      {
        stickerId: 19,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=19',
      },
      {
        stickerId: 20,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=20',
      },
    ],
  },
  {
    stickerCategory: '큐비링',
    stickerInfoList: [
      {
        stickerId: 91,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=1',
      },
      {
        stickerId: 92,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=2',
      },
      {
        stickerId: 93,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=3',
      },
      {
        stickerId: 94,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=4',
      },
      {
        stickerId: 95,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=5',
      },
      {
        stickerId: 96,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=6',
      },
      {
        stickerId: 97,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=7',
      },
      {
        stickerId: 98,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=8',
      },
      {
        stickerId: 99,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=9',
      },
      {
        stickerId: 910,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=10',
      },
      {
        stickerId: 911,
        stickerImage: 'https://source.unsplash.com/random/100x100?sig=11',
      },
    ],
  },
];
