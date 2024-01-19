import styled from '@emotion/styled';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const ButtonWrapper = styled.section`
  display: flex;

  width: 100%;
`;

export const Button = styled.button<{ variant: boolean }>`
  width: calc(100vw - 4rem);
  height: 3.7rem;
  padding: 0.7rem 1.15rem;

  border-radius: 0.4rem 0.4rem 0 0;
  background-color: ${({ theme, variant }) =>
    variant ? theme.colors.black : 'transparent'};
  color: ${({ theme, variant }) =>
    variant ? theme.colors.background : theme.colors.MG};
  ${({ theme }) => theme.fonts.Title2_M_16}

  text-align: center;
  vertical-align: center;
`;

export const ListWrapper = styled.section<{ variant: string }>`
  display: flex;
  justify-content: center;

  width: 100%;
  height: calc(100dvh - 19.3rem);
  padding: 1rem 1rem 1rem 1.5rem;

  border-radius: ${({ variant }) => (variant === 'note' ? 0 : 0.4)}rem
    ${({ variant }) => (variant === 'note' ? 0.4 : 0)}rem 0.4rem 0.4rem;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const ListContainer = styled.div<{ variant: string }>`
  display: flex;
  gap: ${({ variant }) => (variant === 'note' ? 1 : 0.8)}rem
    ${({ variant }) => (variant === 'note' ? 1 : 0.95)}rem;
  flex-wrap: wrap;
  overflow: scroll;

  width: 100%;
  height: 100%;
  align-content: flex-start;
`;
