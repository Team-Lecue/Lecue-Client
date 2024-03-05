import styled from '@emotion/styled';

export const ListWrapper = styled.section`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 3rem 0;
`;

export const DescriptionWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.BG};
  ${({ theme }) => theme.fonts.Body2_M_14};
`;

export const NavigateBtn = styled.button`
  padding: 0.8rem 2.8rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.BG};
  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.BG};
  ${({ theme }) => theme.fonts.Body4_SB_14};
`;
