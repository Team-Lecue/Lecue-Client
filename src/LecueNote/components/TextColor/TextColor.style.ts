import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 1.9rem;
`;

export const ColorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.8rem;
  height: 3.8rem;
`;

export const Color = styled.button<{ $colorCode: string; variant: boolean }>`
  border-radius: 3rem;
  outline: 0.1rem solid ${({ theme }) => theme.colors.WG};

  ${({ variant, theme }) =>
    variant
      ? css`
          width: 3.8rem;
          height: 3.8rem;
          border: 0.4rem solid ${theme.colors.white};
        `
      : css`
          width: 3rem;
          height: 3rem;
          border: none;
        `};

  background-color: ${({ $colorCode }) => $colorCode};
`;
