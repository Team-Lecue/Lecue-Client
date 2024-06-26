import styled from '@emotion/styled';

export const SmallLecueNoteWrapper = styled.div<{
  renderType: number;
  noteTextColor: string;
}>`
  position: relative;

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

  white-space: pre-wrap;

  ${({ theme }) => theme.fonts.Body2_M_14};
`;

export const SmallLecueNoteDate = styled.p`
  width: 100%;
  margin-top: 0.8rem;

  color: ${({ theme }) => theme.colors.DG50};
  ${({ theme }) => theme.fonts.E_Caption_R_12};

  text-align: right;
`;

export const SmallLecueNoteBackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  width: 100%;
  height: 100%;

  border-radius: 0.4rem;
`;

export const SmallLecueNoteBackground = styled.div<{ noteBackground: string }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  width: 100%;
  height: 100%;

  border-radius: 0.4rem;
  background-color: ${({ noteBackground }) => noteBackground};
`;
