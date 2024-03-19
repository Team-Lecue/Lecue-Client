import styled from '@emotion/styled';

export const HistoryPageBodyWrapper = styled.div`
  width: 100%;
  padding: 0 1.6rem;
  margin-top: 5.4rem;
`;

export const HistorySelectButton = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  margin: 3.4rem 0 2rem;
`;

export const CurrentHistoryOption = styled.h2`
  padding-top: 0.3rem;

  color: ${({ theme }) => theme.colors.BG};
  ${({ theme }) => theme.fonts.Head2_SB_18};
`;
