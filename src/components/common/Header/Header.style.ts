import styled from '@emotion/styled';

export const HeaderWrapper = styled.header<{ isDarkMode?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: fixed;
  z-index: 1;

  width: 100%;
  height: 5.4rem;
  padding: 0 1.6rem;

  border-bottom: 0.1rem solid
    ${({ isDarkMode, theme }) =>
      isDarkMode ? theme.colors.DG : theme.colors.BG};
  background-color: ${({ isDarkMode, theme }) =>
    isDarkMode ? theme.colors.BG : theme.colors.white};
`;

export const HeaderTitle = styled.p<{ isDarkMode?: boolean }>`
  color: ${({ isDarkMode, theme }) =>
    isDarkMode ? theme.colors.white : theme.colors.BG};
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
