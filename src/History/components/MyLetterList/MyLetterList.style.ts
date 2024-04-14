import styled from '@emotion/styled';

export const MyLetterListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding-bottom: 2rem;
`;

export const GridViewWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 0.6rem;

  width: 100%;
`;
