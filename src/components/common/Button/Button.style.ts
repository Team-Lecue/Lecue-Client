import styled from '@emotion/styled';

export type ButtonStyle = 'choose' | 'complete';

export const CustomButton = styled.button<{
  variant: ButtonStyle;
  $bookBackgroundColor?: string;
}>`
  width: 100%;
  height: 6rem;

  border-radius: 0.625rem;
  background-color: ${({ theme, variant, $bookBackgroundColor }) =>
    variant === 'choose' || $bookBackgroundColor === '#191919'
      ? theme.colors.key
      : theme.colors.BG};
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.Head2_SB_18};

  :disabled {
    background-color: ${({ theme }) => theme.colors.MG};
  }
`;
