import styled from '@emotion/styled';

export const MainWrapper = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const IconWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  margin: 4rem 1.6rem 3.4rem;
`;

export const Button = styled.button`
  padding: 2.1rem 9.4rem 2.2rem 8.8rem;
  margin: 2.7rem 0 4rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.BG};
  border-radius: 0 0.2rem 0.2rem 0;
  border-left: none;
  background-color: ${({ theme }) => theme.colors.BG};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.Title1_SB_16}
`;
