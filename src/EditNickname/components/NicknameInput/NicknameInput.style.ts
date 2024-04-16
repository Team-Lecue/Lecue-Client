import styled from '@emotion/styled';

export const NicknameInputWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  margin-top: 1.2rem;
`;

export const InputContainer = styled.div<{
  isEmpty: boolean;
  isValid: string;
}>`
  display: flex;
  gap: 1.6rem;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 1.9rem 2rem;

  ${({ theme }) => theme.fonts.Body3_R_14};

  border: 0.1rem solid
    ${({ theme, isEmpty, isValid }) =>
      isValid === 'special' || isValid === 'duplicate' || isValid === 'space'
        ? theme.colors.red
        : isEmpty || isValid === 'enter'
          ? theme.colors.LG
          : theme.colors.BG};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Input = styled.input<{ isValid: string }>`
  width: 100%;

  color: ${({ theme, isValid }) =>
    isValid === 'enter' ? theme.colors.MG : theme.colors.BG};
  ${({ theme }) => theme.fonts.Body2_M_14};
`;

export const WordCount = styled.p`
  color: ${({ theme }) => theme.colors.WG};
  ${({ theme }) => theme.fonts.E_Body2_R_14};
`;

export const WarnigMsg = styled.p`
  width: 100%;
  padding-top: 0.9rem;

  ${({ theme }) => theme.fonts.Caption1_R_12};
  color: ${({ theme }) => theme.colors.red};
`;
