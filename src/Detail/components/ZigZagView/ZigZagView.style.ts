import styled from '@emotion/styled';

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

  width: 34.2rem;
  height: 100%;
  padding: 0.4rem 0 2rem;
`;

export const Sticker = styled.div<{
  stickerImage: string;
  isEditable?: boolean;
}>`
  width: 10rem;
  height: 10rem;

  ${({ isEditable, theme }) =>
    isEditable && `border: solid 0.1rem ${theme.colors.key}`};
  border-radius: 0.4rem;
  background-position: center;
  background-image: ${({ stickerImage }) => `url(${stickerImage})`};
  background-repeat: no-repeat;
  object-fit: cover;
`;
