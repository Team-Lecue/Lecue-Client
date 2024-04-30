import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 1.4rem;
  justify-content: flex-start;
  align-items: center;

  padding: 0.2rem 0.1rem 1rem 0.3rem;

  overflow-x: auto;
`;

export const Input = styled.input`
  display: none;
`;

export const IconWrapper = styled.button<{ $isIconClicked: boolean }>`
  ${({ theme, $isIconClicked }) =>
    $isIconClicked &&
    css`
      outline: 0.1rem solid ${theme.colors.WG};
    `};
  flex-shrink: 0;

  width: 3.8rem;
  height: 3.8rem;

  border-radius: 3rem;
`;

export const ColorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 3.8rem;
  height: 3.8rem;
`;

export const Color = styled.button<{
  $isIconClicked: boolean;
  $colorCode: string;
  variant: boolean;
}>`
  border-radius: 3rem;
  ${({ $colorCode, theme }) =>
    $colorCode === '#FFF' &&
    css`
      outline: 0.1rem solid ${theme.colors.WG};
    `};
  background-color: ${({ $colorCode }) => $colorCode};

  ${({ variant, theme, $isIconClicked }) =>
    $isIconClicked
      ? css`
          width: 3rem;
          height: 3rem;

          border: none;
        `
      : variant
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
