import styled from '@emotion/styled';

export const BigLecueNoteWrapper = styled.div<{ noteBackgroundColor: number }>`
  width: 100%;
  height: 34.2rem;
  padding: 2rem 1.1rem 1.7rem 1.9rem;

  border-radius: 0.6rem;
  background-color: ${({ theme, noteBackgroundColor }) => {
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
    }
  }};
`;

export const BigLecueNoteNickname = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.Head1_B_20};
`;

export const BigLecueNoteContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 22.4rem;
  margin-top: 1.5rem;
  padding-right: 0.8rem;

  overflow: scroll;
`;

export const BigLecueNoteContent = styled.div`
  width: 100%;
  max-height: 100%;

  color: ${({ theme }) => theme.colors.BG};
  ${({ theme }) => theme.fonts.Body1_R_16};
`;

export const BigLecueNoteDate = styled.p`
  width: 100%;
  margin-top: 2.1rem;
  padding-right: 0.8rem;

  color: ${({ theme }) => theme.colors.DG50};
  ${({ theme }) => theme.fonts.E_Body2_R_14};

  text-align: end;
`;
