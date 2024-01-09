import styled from '@emotion/styled';

export const SmallLecueNoteWrapper = styled.div<{
  renderType: number;
  noteBackgroundColor: number;
}>`
  width: 15.2rem;
  height: 16.6rem;
  padding: 1.4rem 1rem 0.9rem 1rem;
  margin: ${({ renderType }) => {
    switch (renderType) {
      case 1:
        return '3.5rem 0 0 0.803rem';
      case 2:
        return '0.6rem 0 0 0.86rem';
      case 3:
        return '3.2rem 0 0 0.86rem';
      case 4:
        return '0.81rem 0 0 0.803rem';
      case 5:
        return '3rem 0 0 0.991rem';
      case 6:
        return '1rem 0 0 0.926rem';
    }
  }};

  border-radius: 0.4rem;
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

  transform: ${({ renderType }) => {
    switch (renderType) {
      case 1:
        return 'rotate(4deg)';
      case 2:
        return 'rotate(-4deg)';
      case 3:
        return 'rotate(-4deg)';
      case 4:
        return 'rotate(4deg)';
      case 5:
        return 'rotate(6deg)';
      case 6:
        return 'rotate(-6deg)';
    }
  }};
`;

export const SmallLecueNoteNickName = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.Title1_SB_16};
`;

export const SmallLecueNoteContent = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 5;

  height: 10rem;
  margin-top: 0.6rem;

  color: ${({ theme }) => theme.colors.BG};
  ${({ theme }) => theme.fonts.Body2_M_14};
`;

export const SmallLecueNoteDate = styled.p`
  width: 100%;
  margin-top: 0.8rem;

  color: rgba(75, 75, 75, 0.5);
  ${({ theme }) => theme.fonts.E_Caption_R_12};

  text-align: right;
`;
