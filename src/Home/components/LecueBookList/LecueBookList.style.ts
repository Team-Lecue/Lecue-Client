import styled from '@emotion/styled';

export const LecueBookListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100dvh;
  background-color: ${({ theme }) => theme.colors.key};
`;

export const Title = styled.header`
  width: 100%;
  padding: 1.5rem 0;

  border-color: ${({ theme }) => theme.colors.BG};
  border-width: 0.1rem 0;
  border-style: solid;
  color: ${({ theme }) => theme.colors.BG};
  ${({ theme }) => theme.fonts.Title1_SB_16};

  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const LecueBookList = styled.section`
  display: grid;
  gap: 2.2rem;
  grid-template-columns: repeat(3, 1fr);

  width: 100%;

  padding: 3rem 1.6rem 2.2rem;
`;

export const LecueBook = styled.li`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 14rem;

  cursor: pointer;
`;

export const BookImage = styled.img`
  width: 9.8rem;
  height: 9.8rem;

  border-radius: 50%;
`;

export const BookTitle = styled.p`
  width: 100%;

  ${({ theme }) => theme.fonts.E_Body1_SB_14};

  text-align: center;
  word-wrap: normal;
  word-break: break-all;
`;
