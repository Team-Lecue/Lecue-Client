import styled from '@emotion/styled';

export const NameWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  margin-top: 1.6rem;
`;

export const InputContainer = styled.div<{ isEmpty: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 1.55rem 2rem;

  ${({ theme }) => theme.fonts.Body3_R_14};

  border: 0.1rem solid
    ${({ theme, isEmpty }) => (isEmpty ? theme.colors.LG : theme.colors.BG)};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Input = styled.input`
  width: 100%;

  color: ${({ theme }) => theme.colors.BG};
  ${({ theme }) => theme.fonts.Body2_M_14};
`;

export const WordCount = styled.p`
  color: ${({ theme }) => theme.colors.WG};
  ${({ theme }) => theme.fonts.E_Body2_R_14};
`;
