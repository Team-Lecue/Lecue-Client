import styled from '@emotion/styled';

export const EmptyViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: calc(100vh - 39rem);
`;

export const EmptyViewTextWrapper = styled.div`
  text-align: center;
  margin-top: 2.1rem;
`;

export const EmptyViewText = styled.p`
  color: ${({ theme }) => theme.colors.MG};
  ${({ theme }) => theme.fonts.Body3_R_14};
`;
