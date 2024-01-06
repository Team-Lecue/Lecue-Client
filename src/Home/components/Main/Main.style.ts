import styled from '@emotion/styled';

export type ButtonStyle = 'making' | 'mypage';

export const MainWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: 34.7rem;
`;

export const IconWrapper = styled.section`
  display: flex;
  width: 100%;
  padding: 6rem 1.6rem 5rem 1.6rem;
  gap: 15.7rem;
`;

export const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Button = styled.button<{ variant: ButtonStyle }>`
  width: 28rem;
  height: 6.4rem;

  background-color: ${({ theme, variant }) =>
    variant === 'making' ? theme.colors.white : theme.colors.BG};

  color: ${({ theme, variant }) =>
    variant === 'making' ? theme.colors.BG : theme.colors.white};

  border: 0.1rem solid ${({ theme }) => theme.colors.BG};
  border-left: none;
  border-radius: 0 0.2rem 0.2rem 0;

  ${({ theme }) => theme.fonts.Title1_SB_16}
`;
