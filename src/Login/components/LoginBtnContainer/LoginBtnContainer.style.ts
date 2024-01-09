import styled from '@emotion/styled';

export const LoginBtnWrapper = styled.section`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;

  width: 100%;
  margin: 3.4rem 0 5.5rem;
  gap: 1.9rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  gap: 0.3rem;
`;

export const Text = styled.p`
  ${({ theme }) => theme.fonts.Body2_M_14}
`;
