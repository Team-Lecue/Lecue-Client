import styled from '@emotion/styled';

export const EmptyViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: calc(100dvh - 39rem);
`;

export const EmptyViewTextWrapper = styled.div`
  margin-top: 2.1rem;

  text-align: center;
`;

export const EmptyViewText = styled.p`
  color: ${({ theme }) => theme.colors.MG};
  ${({ theme }) => theme.fonts.Body3_R_14};
`;
