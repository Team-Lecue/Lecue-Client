import styled from '@emotion/styled';

export const BookInfoBoxWrapper = styled.div<{ backgroundColor: string }>`
  display: flex;

  width: 100%;
  height: 18.3em;

  background-color: ${({ theme, backgroundColor }) => {
    backgroundColor;
    switch (backgroundColor) {
      case '#F5F5F5':
        return theme.colors.BG;
      case '#191919':
        return theme.colors.background;
    }
  }};
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

export const BookInfoHeaderItem = styled.p<{ backgroundColor: string }>`
  height: 1.8rem;
  padding-top: 0.4rem;

  color: ${({ theme, backgroundColor }) => {
    backgroundColor;
    switch (backgroundColor) {
      case '#F5F5F5':
        return theme.colors.white30;
      case '#191919':
        return theme.colors.MG;
    }
  }};

  ${({ theme }) => theme.fonts.E_Caption_R_12};
`;

export const BookInfoTitle = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  margin-top: 0.7rem;
`;

export const BookInfoTitleText = styled.p<{ backgroundColor: string }>`
  max-width: 16.3rem;

  overflow: hidden;

  color: ${({ theme, backgroundColor }) => {
    backgroundColor;
    switch (backgroundColor) {
      case '#F5F5F5':
        return theme.colors.background;
      case '#191919':
        return theme.colors.BG;
    }
  }};

  ${({ theme }) => theme.fonts.Head2_SB_18};

  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const BookInfoContent = styled.p<{ backgroundColor: string }>`
  height: 8.5rem;
  margin-top: 1rem;

  color: ${({ theme, backgroundColor }) => {
    backgroundColor;
    switch (backgroundColor) {
      case '#F5F5F5':
        return theme.colors.white80;
      case '#191919':
        return theme.colors.BG;
    }
  }};
  ${({ theme }) => theme.fonts.Body3_R_14};
`;

export const FavoriteBtn = styled.button`
  width: 2.2rem;
  height: 2.2rem;
`;
