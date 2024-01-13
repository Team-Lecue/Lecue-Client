import styled from '@emotion/styled';

export const BodyWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: calc(100dvh - 24.2rem);
  margin-bottom: 5rem;

  gap: 2rem;
`;

export const LottieWrapper = styled.article`
  width: 100%;
  height: 100%;
`;

export const TextWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Text = styled.p`
  ${({ theme }) => theme.fonts.Title2_M_16};
`;
