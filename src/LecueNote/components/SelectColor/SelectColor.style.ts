import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;

  gap: 1.8rem;
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
