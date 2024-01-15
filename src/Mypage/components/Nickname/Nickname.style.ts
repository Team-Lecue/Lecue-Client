import styled from '@emotion/styled';

export const NicknameWrapper = styled.section`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  width: 100%;
  padding: 2.7rem 0.6rem;
`;

export const Nickname = styled.p`
  ${({ theme }) => theme.fonts.Head1_B_20};
`;
