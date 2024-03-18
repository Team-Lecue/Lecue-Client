import styled from '@emotion/styled';

export const ZigZagViewWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  overflow: hidden;

  width: 34.2rem;
  padding: 1rem 0 2rem;
`;

export const LecueNoteContainer = styled.div`
  width: 100%;
  height: 20.6rem;
`;

export const Sticker = styled.div<{
  stickerImage: string;
  isEditable?: boolean;
}>`
  position: absolute;

  width: 10rem;
  height: 10rem;

  ${({ isEditable, theme }) =>
    isEditable && `border: solid 0.1rem ${theme.colors.key}`};
  border-radius: 0.4rem;
  background-position: center;
  background-image: ${({ stickerImage }) => `url(${stickerImage})`};

  background-size: 10rem 10rem;

  background-repeat: no-repeat;

  object-fit: contain;
`;
