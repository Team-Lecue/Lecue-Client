import styled from '@emotion/styled';

export const BottomWrapper = styled.footer`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: calc(100% - 3rem);
  margin-bottom: 2rem;
`;

export const StartBtn = styled.button`
  width: 100%;
  padding: 1.7rem 0;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.BG};
  ${({ theme }) => theme.fonts.Head2_SB_18};
  color: ${({ theme }) => theme.colors.white};
`;

export const LoginBtn = styled.button`
  border: none;
  color: ${({ theme }) => theme.colors.MG};

  ${({ theme }) => theme.fonts.Body3_R_14};
  text-decoration: underline;
`;
