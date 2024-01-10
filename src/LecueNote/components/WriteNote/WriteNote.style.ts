import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.4rem;
`;

export const LecueNote = styled.article`
  width: 34.2rem;
  height: 34.2rem;
  border-radius: 0.6rem;

  background-color: ${({ theme }) => theme.colors.sub_pink};
`;

export const Notice = styled.p`
  color: ${({ theme }) => theme.colors.key};
  ${({ theme }) => theme.fonts.Caption1_R_12};
`;
