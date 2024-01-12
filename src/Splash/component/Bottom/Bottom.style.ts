import styled from '@emotion/styled';

export const BottomWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: calc(100% - 3rem);
  padding: 1.7rem 0;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.BG};
  ${({ theme }) => theme.fonts.Head2_SB_18};
  color: ${({ theme }) => theme.colors.white};
`;
