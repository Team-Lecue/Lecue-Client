import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: fixed;
  z-index: 1;

  width: 100%;
  height: 5.4rem;
  padding: 0 1.6rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.BG};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const HeaderTitle = styled.p`
  color: ${({ theme }) => theme.colors.BG};
  ${({ theme }) => theme.fonts.E_Title1_SB_18};
`;

export const HeaderButtonWrapper = styled.div<{
  isLeft: boolean;
}>`
  position: absolute;
  ${({ isLeft }) => (isLeft ? 'left' : 'right')}: 1.6rem;

  width: 3.2rem;
  height: 3.2rem;
`;

export const HeaderButton = styled.button`
  width: 100%;
  height: 100%;
`;
