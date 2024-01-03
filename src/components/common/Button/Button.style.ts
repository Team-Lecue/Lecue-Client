import styled from '@emotion/styled';

export type ButtonStyle = 'choose' | 'complete';

export const CustomButton = styled.button<{ variant: ButtonStyle }>`
  width: 34.4rem;
  height: 6rem;

  border-radius: 0.625rem;
  background-color: ${({ theme, variant }) =>
    variant === 'choose' ? theme.colors.key : theme.colors.BG};
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.Head2_SB_18};

  :disabled {
    background-color: ${({ theme }) => theme.colors.MG};
  }
`;
