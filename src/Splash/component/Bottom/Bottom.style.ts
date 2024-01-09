import styled from '@emotion/styled';

export const BottomWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 2.3rem 1.5rem 2rem;

  gap: 4.7rem;
`;

export const TextWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Text = styled.p`
  ${({ theme }) => theme.fonts.Title2_M_16};
`;

export const StartBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 1.7rem 0;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.BG};
  ${({ theme }) => theme.fonts.Head2_SB_18};
  color: ${({ theme }) => theme.colors.white};
`;
