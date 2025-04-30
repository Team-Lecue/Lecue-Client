import styled from '@emotion/styled';

export const CreateBookWrapper = styled.section<{ $backgroundColor: string }>`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100dvh;

  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

export const CreateBookBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: calc(100dvh - 5.4rem);
  padding: 0 1.6rem;
  margin-top: 5.4rem;
`;
