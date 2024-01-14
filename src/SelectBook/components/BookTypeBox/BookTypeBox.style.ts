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

  border: ${({ bookType, selectedBox, theme }) =>
    selectedBox === 0
      ? `0.1rem solid ${theme.colors.LG}`
      : selectedBox === bookType
        ? `0.1rem solid ${theme.colors.key}`
        : `0.1rem solid ${theme.colors.MG}`};
  border-radius: 0.4rem;
  background-color: ${({ bookType, selectedBox, theme }) =>
    bookType === 2 && bookType === selectedBox
      ? theme.colors.BG
      : theme.colors.white};

  transition:
    width 0.5s ease,
    transform 0.5s ease;
  opacity: ${({ bookType, selectedBox }) =>
    selectedBox !== 0 && bookType !== selectedBox ? 0.5 : 1};

  ${({ bookType }) => (bookType === 1 ? 'left' : 'right')}: 0;
`;

export const BookTypeBoxTitle = styled.p<{
  bookType: number;
  selectedBox: number;
}>`
  display: flex;
  align-items: center;

  height: 3.7rem;
  margin: 2.5rem 0 2.7rem;

  color: ${({ bookType, selectedBox, theme }) =>
    bookType === 2 && bookType === selectedBox
      ? theme.colors.white
      : theme.colors.BG};

  ${({ theme }) => theme.fonts.Title1_SB_16};
`;

export const BookTypeBoxPrice = styled.p<{
  bookType: number;
  selectedBox: number;
}>`
  margin-top: 0.9rem;

  color: ${({ bookType, selectedBox, theme }) =>
    bookType === 2 && bookType === selectedBox
      ? theme.colors.white
      : theme.colors.BG};
  ${({ theme }) => theme.fonts.Head1_B_20};
`;

export const BookTypeBoxPriceWrapper = styled.div`
  display: flex;
  column-gap: 0.7rem;

  align-items: flex-end;
`;

export const OneBookText = styled.p`
  padding-bottom: 0.2rem;

  color: ${({ theme }) => theme.colors.MG};
  ${({ theme }) => theme.fonts.Body2_M_14};
`;

export const BookTypeBoxOptionList = styled.div<{
  bookType: number;
  selectedBox: number;
}>`
  display: flex;
  flex-direction: column;
  row-gap: 0.6rem;

  margin-top: 3.85rem;

  color: ${({ bookType, selectedBox, theme }) =>
    bookType === 2 && bookType === selectedBox
      ? theme.colors.white
      : theme.colors.DG};
`;
