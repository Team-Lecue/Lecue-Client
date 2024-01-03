import styled from '@emotion/styled';

export type ButtonStyle = 'choose' | 'complete';

export const CustomButton = styled.button<{ variant: ButtonStyle }>`
  width: 34.4rem;
  height: 6rem;
  border-radius: 0.625rem;

  background-color: ${({ theme, variant }) =>
    variant === 'choose' ? theme.colors.key : theme.colors.BG};

  ${({ theme }) => theme.fonts.Head2_SB_18};
  color: ${({ theme }) => theme.colors.white};

  :disabled {
    background-color: ${({ theme }) => theme.colors.MG};
  }
`;
