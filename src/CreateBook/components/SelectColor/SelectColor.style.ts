import styled from '@emotion/styled';

export const Wrapper = styled.article`
  display: flex;
  gap: 1.6rem;
  flex-direction: column;
`;
export const Category = styled.p<{ variant: boolean }>`
  display: flex;

  color: ${({ theme, variant }) => (variant ? theme.colors.white : theme.colors.BG)};
  ${({ theme }) => theme.fonts.Title1_SB_16};
`;
