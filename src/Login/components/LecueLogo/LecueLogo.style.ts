import styled from '@emotion/styled';

export const LogoWrapper = styled.section`
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 11.2rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black};
`;

export const Line = styled.div`
  width: 11.2rem;

  border-right: 0.1rem solid ${({ theme }) => theme.colors.black};
`;

export const Logo = styled.i`
  display: flex;
  justify-content: end;

  width: 26.3rem;
  padding: 1.8rem 1.4rem 2.2rem 2.9rem;
`;
