import styled from '@emotion/styled';

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: 0 1.64rem;
  padding-bottom: 10rem;

  background-color: ${({ theme }) => theme.colors.BG};
`;
