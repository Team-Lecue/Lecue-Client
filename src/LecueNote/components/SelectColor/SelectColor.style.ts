import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.article`
  display: flex;
  gap: 1.8rem;
  flex-direction: column;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  gap: 1.4rem;
`;

export const Category = styled.button<{ variant: boolean }>`
  ${({ theme, variant }) =>
    variant
      ? css`
          ${theme.fonts.Title1_SB_16}
          color: ${theme.colors.BG}
        `
      : css`
          ${theme.fonts.Title2_M_16}
          color: ${theme.colors.MG}
        `}
  background-color: none;
`;
