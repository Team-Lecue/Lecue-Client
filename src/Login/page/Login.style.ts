import styled from '@emotion/styled';

export const LoginWrapper = styled.section`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Gradient = styled.div`
  width: 100%;
  height: 66.7rem;

  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.key} 1%,
    ${({ theme }) => theme.colors.background} 50%
  );
`;
