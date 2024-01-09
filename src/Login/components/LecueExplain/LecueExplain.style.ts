import styled from '@emotion/styled';

export const GirdWrapper = styled.section`
  display: grid;

  width: 100vw;
  height: 40.7rem;

  grid-template-columns: 11.2rem 26.3rem;
  grid-template-rows: 11.2rem 29.5rem;
`;

export const GridElement = styled.div`
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black};

  &:nth-child(1) {
    border-right: 0.1rem solid ${({ theme }) => theme.colors.black};
  }

  &:nth-child(3) {
    grid-column: 1/3;
    grid-row: 2/3;
  }
`;
