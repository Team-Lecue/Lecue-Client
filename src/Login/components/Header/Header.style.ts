import styled from '@emotion/styled';

export const HeaderWrapper = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 8rem;
`;

export const Logo = styled.header`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  width: 100%;
  height: 4.4rem;
  padding: 0.8rem 1.3rem;

  background-color: ${({ theme }) => theme.colors.black};
`;

export const OrangeBlock = styled.div`
  width: 100%;
  height: 3.6rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.key};
`;
