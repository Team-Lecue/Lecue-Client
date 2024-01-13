import styled from '@emotion/styled';

export const BookTypeBoxWrapper = styled.div<{
  bookType: number;
  selectedBox: number;
  isClickedSelectButton: boolean;
}>`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;

  /* z-index: ${({ bookType, selectedBox }) =>
    bookType === selectedBox ? '2' : '1'}; */

  width: ${({ bookType, isClickedSelectButton }) =>
    bookType === 2 && isClickedSelectButton ? '28.4rem' : '16.5rem'};
  height: 34.9rem;

  border: 1px solid blue;
  background-color: ${({ bookType }) => (bookType === 1 ? 'blue' : 'red')};

  transition:
    width 0.5s ease,
    transform 0.5s ease;

  ${({ bookType }) => (bookType === 1 ? 'left' : 'right')}: 0;
`;
