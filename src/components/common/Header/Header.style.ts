import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 5.4rem;
  padding: 0 1.6rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.BG};
`;

export const HeaderTitle = styled.p`
  ${({ theme }) => theme.fonts.E_Title1_SB_18};
`;

export const HeaderButton = styled.button`
  width: 3.2rem;
  height: 3.2rem;
`;
