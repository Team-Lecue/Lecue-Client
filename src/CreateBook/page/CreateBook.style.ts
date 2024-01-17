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
  justify-content: space-between;
  flex-direction: column;

  width: 100%;
  height: calc(100vh - 5.4rem);
  padding: 0 1.6rem;
  margin-top: 5.4rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const SectionTitle = styled.p<{ variant: boolean }>`
  color: ${({ theme, variant }) =>
    variant ? theme.colors.white : theme.colors.BG};

  ${({ theme }) => theme.fonts.Head2_SB_18};
`;

export const BookInputWrapper = styled.div`
  width: 100%;
  margin-top: 3rem;
`;

export const BookInfoTextareaWrapper = styled.div`
  width: 100%;
  margin: 4.4rem 0 2.63rem;
`;
