import styled from '@emotion/styled';

export const BigLecueNoteWrapper = styled.div<{
  noteBackgroundColor: number;
  noteBackgroundImage: string;
  noteTextColor: number;
}>`
  width: 100%;
  height: 34.2rem;
  padding: 2rem 1.1rem 1.7rem 1.9rem;

  border-radius: 0.6rem;
  background: ${({ theme, noteBackgroundColor, noteBackgroundImage }) => {
    if (noteBackgroundColor === -1) {
      return `url(${noteBackgroundImage})`;
    } else {
      switch (noteBackgroundColor) {
        case 1:
          return theme.colors.sub_pink;
        case 2:
          return theme.colors.sub_blue;
        case 3:
          return theme.colors.sub_green;
        case 4:
          return theme.colors.sub_purple;
        case 5:
          return theme.colors.sub_yellow;
        case 6:
          return theme.colors.sub_ivory;
        default:
          return 'transparent';
      }
    }
  }};
  background-size: cover;
  color: ${({ theme, noteTextColor }) => {
    switch (noteTextColor) {
      case 0:
        return theme.colors.white;
      case 1:
        return theme.colors.BG;
    }
  }};
`;

export const BigLecueNoteNickname = styled.p`
  ${({ theme }) => theme.fonts.Head1_B_20};
`;

export const BigLecueNoteContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;

  width: 100%;
  height: 22.4rem;
  padding-right: 0.8rem;
  margin-top: 1.5rem;
`;

export const BigLecueNoteContent = styled.div`
  width: 100%;
  max-height: 100%;

  ${({ theme }) => theme.fonts.Body1_R_16};
`;

export const BigLecueNoteDate = styled.p`
  width: 100%;
  padding-right: 0.8rem;
  margin-top: 2.1rem;

  ${({ theme }) => theme.fonts.E_Body2_R_14};

  text-align: end;
`;
