import styled from '@emotion/styled';

export const BigLecueNoteWrapper = styled.div<{
  noteBackground: string;
  noteTextColor: string;
}>`
  width: 100%;
  height: 34.2rem;
  padding: 2rem 1.1rem 1.7rem 1.9rem;

  border-radius: 0.6rem;
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
`;

export const BigLecueNoteNickname = styled.p`
  ${({ theme }) => theme.fonts.Head1_B_20};
`;

export const BigLecueNoteContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;

  width: 100%;
  height: 22.4rem;
  padding-right: 0.8rem;
  margin-top: 1.5rem;
`;

export const BigLecueNoteContent = styled.div`
  width: 100%;
  max-height: 100%;

  ${({ theme }) => theme.fonts.Body1_M_16};

  white-space: pre-wrap;
`;

export const BigLecueNoteDate = styled.p`
  width: 100%;
  padding-right: 0.8rem;
  margin-top: 2.1rem;

  ${({ theme }) => theme.fonts.E_Body2_R_14};

  text-align: end;
`;
