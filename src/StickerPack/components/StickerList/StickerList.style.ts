import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.header`
  margin: 1.4rem 0;

  color: ${({ theme }) => theme.colors.BG};

  ${({ theme }) => theme.fonts.Head2_SB_18};
`;

export const StickerGridWrapper = styled.article`
  display: grid;
  gap: 2.15rem 1.6rem;
  grid-template-columns: repeat(3, 1fr);

  margin-bottom: 5rem;
`;

export const ImageWrapper = styled.button<{
  isSelected: boolean;
}>`
  width: 10rem;
  height: 10rem;

  border: solid 0.1rem
    ${({ theme, isSelected }) =>
      isSelected ? theme.colors.key : theme.colors.background};
  border-radius: 0.4rem;
`;

export const ImageComponent = styled.img`
  width: 10rem;
  height: 10rem;

  object-fit: contain;
`;
