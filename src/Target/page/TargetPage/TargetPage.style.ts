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
  justify-content: space-between;
  flex-direction: column;

  width: 100%;
  height: calc(100vh - 5.4rem);
  padding: 0 1.6rem;
  margin-top: 5.4rem;
`;

export const SectionTitle = styled.p`
  color: ${({ theme }) => theme.colors.BG};

  ${({ theme }) => theme.fonts.Head2_SB_18};
`;

export const InputSectionWrapper = styled.div`
  width: 100%;
`;

export const NameInputWrapper = styled.div`
  width: 100%;
  margin-top: 3rem;
`;

export const FavoriteInputWrapper = styled.div`
  width: 100%;
  margin-top: 5.6rem;
`;
