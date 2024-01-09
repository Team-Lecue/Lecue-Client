import styled from '@emotion/styled';

export const GirdWrapper = styled.section`
  display: grid;

  width: 100vw;
  height: 40.7rem;

  grid-template-columns: 1.4fr 3.3fr;
  grid-template-rows: 1.4fr 3.3fr;
`;

export const GridElement = styled.div`
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black};

  &:nth-of-type(1) {
    border-right: 0.1rem solid ${({ theme }) => theme.colors.black};
  }

  &:nth-of-type(2) {
    display: flex;
    justify-content: end;

    padding: 1.8rem 1.4rem 2.2rem 2.9rem;
  }

  &:nth-of-type(3) {
    grid-column: 1/3;
    grid-row: 2/3;

    display: flex;
    justify-content: end;
  }
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 29rem;
`;

export const Comment = styled.i`
  &:nth-of-type(1) {
    padding: 4.1rem 8rem 0 7.7rem;
  }

  &:nth-of-type(2) {
    padding: 1.4rem 14.1rem 0 3.3rem;
  }

  &:nth-of-type(3) {
    padding: 6.6rem 2.3rem 0 10.3rem;
  }
`;

export const Line = styled.div`
  display: flex;
  justify-content: end;

  width: 8.5rem;
  padding-right: 2.4rem;
`;
