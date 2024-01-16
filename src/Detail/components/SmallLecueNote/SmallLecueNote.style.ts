import styled from '@emotion/styled';

export const SmallLecueNoteWrapper = styled.div<{
  renderType: number;
  noteTextColor: number;
  noteBackground: string;
}>`
  width: 15.2rem;
  height: 16.6rem;
  padding: 1.4rem 1rem 0.9rem;
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
  ${({ noteBackground }) => {
    if (noteBackground.substring(0, 1) === '#') {
      return `background-color: ${noteBackground}`;
    } else {
      return `background: url(${noteBackground})`;
    }
  }};
  background-size: cover;
  color: ${({ noteTextColor }) => {
    return noteTextColor;
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
  ${({ theme }) => theme.fonts.Title1_SB_16};
`;

export const SmallLecueNoteContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 10rem;
  margin-top: 0.6rem;

  ${({ theme }) => theme.fonts.Body2_M_14};
`;

export const SmallLecueNoteContent = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 5;

  max-height: 100%;

  ${({ theme }) => theme.fonts.Body2_M_14};
`;

export const SmallLecueNoteDate = styled.p`
  width: 100%;
  margin-top: 0.8rem;

  color: ${({ theme }) => theme.colors.DG50};
  ${({ theme }) => theme.fonts.E_Caption_R_12};

  text-align: right;
`;
