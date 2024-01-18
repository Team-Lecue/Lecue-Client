import styled from '@emotion/styled';

export const BodyWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100vw;
  height: calc(100dvh - 18.7rem);
`;

export const LottieWrapper = styled.article`
  width: 100%;
`;

export const TextWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-bottom: 3.2rem;
`;

export const Text = styled.p`
  ${({ theme }) => theme.fonts.Title2_M_16};
`;
