import styled from '@emotion/styled';

export const Wrapper = styled.li<{
  noteBackgroundColor: number;
  noteBackgroundImage: string;
}>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 48.5%;
  height: 16.3rem;
  padding: 1.5rem 0.95rem 1rem;

  border-radius: 0.4rem;
  background: ${({ theme, noteBackgroundColor, noteBackgroundImage }) => {
    if (noteBackgroundColor === -1) {
      return `url(${noteBackgroundImage})`;
    } else {
      switch (noteBackgroundColor) {
        case 0:
          return theme.colors.sub_pink;
        case 1:
          return theme.colors.sub_ivory;
        case 2:
          return theme.colors.sub_yellow;
        case 3:
          return theme.colors.sub_green;
        case 4:
          return theme.colors.sub_blue;
        case 5:
          return theme.colors.sub_purple;
        case 6:
          return '#FE394C';
        case 7:
          return '#9852F9';
        case 8:
          return '#FFD600';
        case 9:
          return '#98ED4D';
        case 10:
          return '#FF71B3';
        case 11:
          return '#CCCCCC';
        default:
          return 'transparent';
      }
    }
  }};
  background-size: cover;
`;

export const TextWrapper = styled.div<{ noteTextColor: number }>`
  display: flex;
  gap: 0.4rem;
  flex-direction: column;

  width: 100%;
  margin-bottom: 1.8rem;

  color: ${({ theme, noteTextColor }) =>
    noteTextColor === 0 ? theme.colors.white : theme.colors.BG};
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

  text-align: right;
`;
