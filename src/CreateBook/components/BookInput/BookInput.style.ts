import styled from '@emotion/styled';

export const BookNameWrapper = styled.section`
  display: flex;
  gap: 1.7rem;
  align-items: center;
  flex-direction: column;

  width: 100%;
`;

export const Question = styled.p`
  width: 100%;

  color: ${({ theme }) => theme.colors.BG};

  ${({ theme }) => theme.fonts.Head2_SB_18};
`;

export const InputContainer = styled.div<{ isEmpty: boolean }>`
  display: flex;
  gap: 1.6rem;

  width: 100%;
  padding: 1.9rem 2rem;

  ${({ theme }) => theme.fonts.Body3_R_14};

  border: 0.1rem solid
    ${({ theme, isEmpty }) => (isEmpty ? theme.colors.LG : theme.colors.BG)};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const InputWrapper = styled.div<{ isTitle?: boolean }>`
  width: 100%;
  height: ${({ isTitle }) => !isTitle && '15rem'};
`;

export const Input = styled.input`
  width: 100%;

  color: ${({ theme }) => theme.colors.BG};

  ${({ theme }) => theme.fonts.Body2_M_14};
  text-align: start;
`;

export const WordCount = styled.p`
  display: inline-block;

  color: ${({ theme }) => theme.colors.WG};

  ${({ theme }) => theme.fonts.E_Body2_R_14};

  align-self: flex-end;
`;
