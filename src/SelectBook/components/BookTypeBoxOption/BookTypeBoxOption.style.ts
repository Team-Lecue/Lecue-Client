import styled from '@emotion/styled';

export const BookTypeBoxOptionWrapper = styled.div`
  display: flex;
  column-gap: 0.5rem;

  align-items: center;
`;

export const BookTypeBoxOptionText = styled.p`
  ${({ theme }) => theme.fonts.Body2_M_14};
`;
