import styled from '@emotion/styled';

export const BookInfoWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  margin-top: 1.2rem;
`;

export const TextareaContainer = styled.div<{ isEmpty: boolean }>`
  width: 100%;
  height: 15rem;
  padding: 1.7rem 2rem 4rem;

  ${({ theme }) => theme.fonts.Body3_R_14};

  border: 0.1rem solid
    ${({ theme, isEmpty }) => (isEmpty ? theme.colors.LG : theme.colors.BG)};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100%;

  border: none;
  color: ${({ theme }) => theme.colors.BG};

  ${({ theme }) => theme.fonts.Body2_M_14};

  resize: none;

  &:focus {
    outline: none;
  }
`;

export const WordCount = styled.p`
  display: flex;
  justify-content: flex-end;

  width: 100%;

  color: ${({ theme }) => theme.colors.WG};
  ${({ theme }) => theme.fonts.E_Body2_R_14};
`;
