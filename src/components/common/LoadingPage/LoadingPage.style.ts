import styled from '@emotion/styled';

export const LoadingPageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100dvh;
`;

export const LoadingPageItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 46%;
`;

export const LottieWrapper = styled.div`
  width: 12rem;
  height: 12rem;
`;

export const LoadingPageTextWrapper = styled.div`
  margin-top: 4.6rem;

  text-align: center;
`;

export const LoadingText = styled.p`
  color: ${({ theme }) => theme.colors.BG};
  ${({ theme }) => theme.fonts.Title1_SB_16};
`;

export const WaitText = styled.p`
  margin-top: 0.8rem;

  color: ${({ theme }) => theme.colors.MG};
  ${({ theme }) => theme.fonts.Body3_R_14};
`;
