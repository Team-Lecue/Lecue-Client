import styled from '@emotion/styled';

export const EditNicknameBodyWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: calc(100dvh - 5.4rem);
  padding: 0 1.6rem;
  margin-top: 5.4rem;
`;

export const NicknameInputSection = styled.section`
  width: 100%;
  margin-top: 3.4rem;
`;

export const NicknameInputSectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.BG};

  ${({ theme }) => theme.fonts.Head2_SB_18}
`;
