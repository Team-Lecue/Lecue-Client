import styled from '@emotion/styled';

export const BookInfoBoxWrapper = styled.div<{ isDarkMode: boolean }>`
  display: flex;

  width: 100%;
  height: 18.3em;

  background-color: ${({ isDarkMode, theme }) =>
    isDarkMode ? theme.colors.white : theme.colors.BG};
`;

export const ProfileImageWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-left: 1.6rem;
`;

export const ProfileImg = styled.img`
  width: 12.6rem;
  height: 12.6rem;

  border-radius: 8.2rem;

  object-fit: cover;
`;

export const BookInfoWrapper = styled.div`
  padding: 2.2rem 1.7rem;
`;

export const BookInfoHeader = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.9rem;
`;

export const BookInfoHeaderItemWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.3rem;
`;

export const BookInfoHeaderItem = styled.p<{ isDarkMode: boolean }>`
  height: 1.8rem;
  padding-top: 0.4rem;

  color: ${({ isDarkMode, theme }) =>
    isDarkMode ? theme.colors.MG : 'rgba(255, 255, 255, 0.3)'};
  ${({ theme }) => theme.fonts.E_Caption_R_12};
`;

export const BookInfoTitle = styled.p<{ isDarkMode: boolean }>`
  margin-top: 0.7rem;

  color: ${({ isDarkMode, theme }) =>
    isDarkMode ? theme.colors.BG : theme.colors.white};
  ${({ theme }) => theme.fonts.Head2_SB_18};
`;

export const BookInfoContent = styled.p<{ isDarkMode: boolean }>`
  height: 8.5rem;
  margin-top: 1rem;

  color: ${({ isDarkMode, theme }) =>
    isDarkMode ? theme.colors.BG : 'rgba(255, 255, 255, 0.8)'};
  ${({ theme }) => theme.fonts.Body3_R_14};
`;
