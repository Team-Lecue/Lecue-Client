import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2.9rem 1.6rem;
  gap: 1.2rem;
`;

export const Tab = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 13rem;

  padding: 0 3rem;
  border-radius: 0.2rem;

  background-color: ${({ theme }) => theme.colors.LG};
  cursor: pointer;

  ${({ theme }) => theme.fonts.Title1_SB_16}
  color: ${({ theme }) => theme.colors.BG}
`;
