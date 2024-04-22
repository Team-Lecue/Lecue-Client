import styled from '@emotion/styled';

export const LecueBookListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  background-color: ${({ theme }) => theme.colors.key};
`;

export const Title = styled.header`
  width: 100%;
  padding: 1.5rem 0;

  border-color: ${({ theme }) => theme.colors.BG};
  border-width: 0.1rem 0;
  border-style: solid;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.BG};
  ${({ theme }) => theme.fonts.Title1_SB_16};

  text-align: center;
`;

export const LecueBookList = styled.section`
  display: grid;
  gap: 2em 2.4rem;
  align-items: start;
  grid-template-columns: repeat(3, 1fr);

  width: 100%;
  padding: 3rem 1.6rem;
`;

export const LecueBook = styled.li`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  width: 100%;

  cursor: pointer;
`;

export const IconWrapper = styled.button`
  position: absolute;
  top: 0;
  left: 0.1rem;
`;

export const BookImage = styled.img`
  width: 9.8rem;
  height: 9.8rem;

  border-radius: 50%;

  object-fit: cover;
`;

export const BookTitle = styled.p`
  width: 100%;

  ${({ theme }) => theme.fonts.E_Body1_SB_14};

  text-align: center;
  word-wrap: normal;
  word-break: break-all;
`;
