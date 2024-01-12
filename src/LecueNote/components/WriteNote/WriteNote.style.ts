import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-direction: column;
`;

export const LecueNote = styled.article<{ $bgColor: string }>`
  width: 100%;
  height: calc(100dvh - 33.2rem);

  border-radius: 0.6rem;
  background-color: ${({ $bgColor }) => $bgColor};
`;

export const Notice = styled.p`
  color: ${({ theme }) => theme.colors.key};

  ${({ theme }) => theme.fonts.Caption1_R_12};
`;
