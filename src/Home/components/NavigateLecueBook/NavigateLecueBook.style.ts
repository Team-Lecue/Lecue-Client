import styled from '@emotion/styled';

export const MainWrapper = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const IconWrapper = styled.section`
  display: flex;
  gap: 15.7rem;
  align-items: baseline;
  justify-content: space-between;

  width: 100%;
  padding: 6rem 1.6rem 5rem;
`;

export const ButtonWrapper = styled.section`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  padding: 0 9.5rem 4.9rem 0;
`;

export const Button = styled.button<{ variant?: boolean }>`
  width: 28rem;
  height: 6.4rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.BG};
  border-radius: 0 0.2rem 0.2rem 0;
  border-left: none;
  background-color: ${({ theme, variant }) =>
    variant ? theme.colors.white : theme.colors.BG};
  color: ${({ theme, variant }) =>
    variant ? theme.colors.BG : theme.colors.white};
  ${({ theme }) => theme.fonts.Title1_SB_16}
`;
