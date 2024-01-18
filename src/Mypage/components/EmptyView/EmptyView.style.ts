import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  width: 15.5rem;

  color: ${({ theme }) => theme.colors.white50};

  ${({ theme }) => theme.fonts.Body1_R_16};
  text-align: center;
`;
