import styled from '@emotion/styled';

export const HistoryEnterPageBodyWrapper = styled.section`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;

  width: 100%;
  padding: 2.9rem 1.6rem;
  margin-top: 5.4rem;
`;

export const Tab = styled.li<{ variant: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 13rem;
  padding: 0 ${({ variant }) => (variant === 'book' ? 2.9 : 1.9)}rem 0 3rem;

  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export const Text = styled.h1`
  color: ${({ theme }) => theme.colors.BG};
  ${({ theme }) => theme.fonts.Title1_SB_16};
`;
