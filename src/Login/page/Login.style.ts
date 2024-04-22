import styled from '@emotion/styled';

export const LoginWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100dvh;

  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.key} -20%,
    ${({ theme }) => theme.colors.background} 60%
  );
`;
