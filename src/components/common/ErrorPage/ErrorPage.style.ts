import styled from '@emotion/styled';

export const ErrorPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100dvh;
`;

export const ErrorPageMessage = styled.p`
  margin-top: 2.4rem;

  color: ${({ theme }) => theme.colors.BG};
  ${({ theme }) => theme.fonts.Title2_M_16};
`;

export const HomeButton = styled.button`
  padding: 1.4rem 3.2rem;
  margin-top: 3rem;

  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.BG};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.Title1_SB_16};
`;
