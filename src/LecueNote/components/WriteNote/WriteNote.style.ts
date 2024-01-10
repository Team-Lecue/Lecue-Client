import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.4rem;
`;

export const LecueNote = styled.article<{ $bgColor: string }>`
  width: 100%;
  height: calc(100dvh - 32.5rem);

  border-radius: 0.6rem;
  background-color: ${({ $bgColor }) => $bgColor};
`;

export const Notice = styled.p`
  color: ${({ theme }) => theme.colors.key};

  ${({ theme }) => theme.fonts.Caption1_R_12};
`;
