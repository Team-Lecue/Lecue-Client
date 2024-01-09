import styled from '@emotion/styled';

export const LogoWrapper = styled.section`
  display: flex;

  width: 100vw;
  height: 11.2rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black};
`;

export const Line = styled.div`
  width: 30%;

  border-right: 0.1rem solid ${({ theme }) => theme.colors.black};
`;

export const Logo = styled.i`
  display: flex;
  justify-content: end;

  width: 70%;
  padding: 1.8rem 1.4rem 2.2rem 2.9rem;
`;
