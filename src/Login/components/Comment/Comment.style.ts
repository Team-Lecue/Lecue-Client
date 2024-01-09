import styled from '@emotion/styled';

export const CommentWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: calc(100dvh - 36.3rem);

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black};
`;

export const CommentSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 33rem;
  height: 100%;
`;

export const Comment = styled.i`
  &:nth-of-type(1) {
    padding: 4.1rem 12.2rem 0 7.7rem;
  }

  &:nth-of-type(2) {
    padding: 1.4rem 18.3rem 0 3.3rem;
  }

  &:nth-of-type(3) {
    padding: 6.6rem 6.5rem 5.3rem 10.3rem;
  }
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 4.2rem;
  height: 100%;
  padding: 5.3rem 0;

  border-left: 0.1rem solid ${({ theme }) => theme.colors.black};
`;

export const Spring = styled.i`
  margin-left: -2.1rem;
`;
