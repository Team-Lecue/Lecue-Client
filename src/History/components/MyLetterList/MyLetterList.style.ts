import styled from '@emotion/styled';

export const MyLetterListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const GridViewWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 0.6rem;

  width: 100%;
  padding-bottom: 2rem;
`;

export const EmptyViewWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: calc(100dvh - 13.62rem);
`;

export const EmptyViewNotice = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 12.3rem;
`;

export const EmptyViewText = styled.p`
  margin-top: 3rem;

  color: ${({ theme }) => theme.colors.WG};

  text-align: center;

  ${({ theme }) => theme.fonts.Body2_M_14};
`;
