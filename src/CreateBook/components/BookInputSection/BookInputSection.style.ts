import styled from '@emotion/styled';

export const SectionTitle = styled.p<{ variant: boolean }>`
  color: ${({ theme, variant }) =>
    variant ? theme.colors.white : theme.colors.BG};

  ${({ theme }) => theme.fonts.Head2_SB_18};
`;

export const BookInputSectionWrapper = styled.div`
  width: 100%;
  margin-top: 3rem;
`;
