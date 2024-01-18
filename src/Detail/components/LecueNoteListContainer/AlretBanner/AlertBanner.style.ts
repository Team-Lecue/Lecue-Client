import styled from '@emotion/styled';

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  bottom: 2rem;

  width: 92%;
`;

export const AlertBanner = styled.div`
  display: flex;
  gap: 0.4rem;
  justify-content: center;

  width: 90%;
  padding: 1.1rem 2.35rem;
  margin-bottom: 1rem;

  border-radius: 0.6rem;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.key};

  text-align: center;
  ${({ theme }) => theme.fonts.Caption2_SB_12};
`;
