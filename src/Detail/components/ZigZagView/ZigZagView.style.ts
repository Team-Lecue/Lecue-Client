import styled from '@emotion/styled';

import { postedStickerType } from '../LecueNoteListContainer';

export const ZigZagViewWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;

  width: 34.2rem;
  padding: 0.4rem 0 2rem;
`;

export const LecueNoteContainer = styled.div`
  width: 100%;
  height: 20.6rem;
`;

export const StickerContainer = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;
`;

export const Sticker = styled.div<{ stickerState: postedStickerType }>`
  background-image: ${({ stickerState }) =>
    `url(${stickerState.stickerImage})`};

  width: 10rem;
  height: 10rem;
  background-repeat: no-repeat;

  background-position: center;
  object-fit: cover;
`;
