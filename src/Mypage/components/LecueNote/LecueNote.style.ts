import styled from '@emotion/styled';

export const Wrapper = styled.li<{
  noteBackground: string;
}>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 48.5%;
  height: 16.3rem;
  padding: 1.5rem 0.95rem 1rem;

  border-radius: 0.4rem;

  ${({ noteBackground }) => {
    if (noteBackground.substring(0, 1) === '#') {
      return `background-color: ${noteBackground}`;
    } else {
      return `background: url(${noteBackground});
      background-size: cover;`;
    }
  }}
`;

export const TextWrapper = styled.div<{ noteTextColor: string }>`
  display: flex;
  gap: 0.4rem;
  flex-direction: column;

  width: 100%;
  margin-bottom: 1.8rem;

  color: ${({ noteTextColor }) => {
    return noteTextColor;
  }};
`;

export const Name = styled.p`
  width: 100%;

  ${({ theme }) => theme.fonts.Title1_SB_16};
`;

export const Title = styled.p`
  width: 100%;
  margin-bottom: 0.5rem;

  ${({ theme }) => theme.fonts.Body4_SB_14};
`;

export const Content = styled.p`
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  overflow: hidden;

  width: 100%;

  ${({ theme }) => theme.fonts.Body3_R_14};

  text-overflow: ellipsis;
`;

export const Date = styled.p`
  width: 100%;

  ${({ theme }) => theme.fonts.E_Caption_R_12};
  color: ${({ theme }) => theme.colors.Modal};
  opacity: 0.7;

  text-align: right;
`;
