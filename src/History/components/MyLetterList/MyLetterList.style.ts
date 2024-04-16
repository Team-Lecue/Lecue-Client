import styled from '@emotion/styled';

export const MyLetterListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const GridViewWrapper = styled.div`
  display: grid;
  gap: 0.6rem 0.7rem;
  grid-template-columns: repeat(2, 1fr);

  width: 100%;
  padding-bottom: 2rem;
`;
