import styled from '@emotion/styled';

export const TargetPageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  width: 100vw;
  height: 100dvh;
`;

export const TargetPageBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: calc(100dvh - 5.4rem);
  padding: 0 1.6rem;
  margin-top: 5.4rem;
`;
