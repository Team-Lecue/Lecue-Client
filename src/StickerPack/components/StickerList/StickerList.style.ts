import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  align-items: start;
  flex-direction: column;

  width: 100%;
`;

export const Title = styled.header`
  margin: 1.4rem 0;

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.Head2_SB_18};
`;

export const StickerGridWrapper = styled.article`
  display: grid;
  gap: 2.15rem 1.6rem;
  grid-template-columns: repeat(3, 1fr);

  width: 100%;
`;

export const ImageComponent = styled.button<{
  isSelected: boolean;
  url: string;
}>`
  width: 10rem;
  height: 10rem;

  border: solid 0.1rem
    ${({ theme, isSelected }) =>
      isSelected ? theme.colors.key : theme.colors.BG};
  border-radius: 0.4rem;
  background: url(${({ url }) => url};);
  background-position: center;
  background-size: 10rem 10rem;
`;
