import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100vw;

  background-color: ${({ theme }) => theme.colors.white};
`;
