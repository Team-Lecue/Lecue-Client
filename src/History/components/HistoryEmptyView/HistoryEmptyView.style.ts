import styled from '@emotion/styled';

export const HistoryEmptyViewWrapper = styled.section`
  display: flex;
  justify-content: center;

  width: 100%;
  height: calc(100dvh - 13.62rem);
`;

export const HistoryEmptyViewNotice = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 12.3rem;
`;

export const HistoryEmptyViewText = styled.p`
  margin-top: 3rem;

  color: ${({ theme }) => theme.colors.WG};

  text-align: center;
  ${({ theme }) => theme.fonts.Body2_M_14};
`;
