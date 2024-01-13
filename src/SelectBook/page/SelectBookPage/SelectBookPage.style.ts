import styled from '@emotion/styled';

export const SelectBookPageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100dvh;
`;

export const SelectBookPageBodyWrapper = styled.div`
  width: 100%;
  padding: 0 1.6rem;
  margin-top: 5.4rem;
`;

export const SelectBookContainer = styled.div`
  width: 100%;
  margin-top: 5.4rem;
`;

export const SectionTitle = styled.p`
  color: ${({ theme }) => theme.colors.BG};
  ${({ theme }) => theme.fonts.Head2_SB_18};
`;

export const BookTypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  width: 34.3rem;
  margin-top: 4rem;
`;
