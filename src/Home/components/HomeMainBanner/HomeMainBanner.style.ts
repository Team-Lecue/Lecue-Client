import styled from '@emotion/styled';

export const MainWrapper = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const IconWrapper = styled.section`
  display: flex;

  /* 바뀔 수 있을 것 같으니 디자인 나오면 다시 확인해보기 ! */
  gap: 16rem;
  align-items: baseline;

  width: 100%;
  margin: 4rem 1.8rem 3.5rem 1.6rem;
`;

export const DummyGraphic = styled.div`
  width: 37.5rem;
  height: 20rem;

  background-color: ${({ theme }) => theme.colors.LG};
`;

export const Button = styled.button`
  padding: 2.1rem 9.4rem 2.2rem 8.8rem;
  margin: 2rem 0 4rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.BG};
  border-radius: 0 0.2rem 0.2rem 0;
  border-left: none;
  background-color: ${({ theme }) => theme.colors.BG};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.Title1_SB_16}
`;
