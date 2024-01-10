import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 0.5rem 0 0.7rem 0.3rem;

  overflow-x: scroll;

  gap: 1.4rem;
`;

export const ColorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 3.8rem;
  height: 3.8rem;
`;

export const Color = styled.button<{ $colorCode: string; variant: boolean }>`
  border-radius: 3rem;
  ${({ $colorCode, theme }) =>
    $colorCode === '#FFF' &&
    css`
      outline: 0.1rem solid ${theme.colors.WG};
    `};
  background-color: ${({ $colorCode }) => $colorCode};

  ${({ variant, theme }) =>
    variant
      ? css`
          width: 3.8rem;
          height: 3.8rem;

          border: 0.4rem solid ${theme.colors.white};
          outline: 0.1rem solid ${theme.colors.WG};
        `
      : css`
          width: 3rem;
          height: 3rem;

          border: none;
        `};
`;
