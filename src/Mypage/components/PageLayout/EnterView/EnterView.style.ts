import styled from '@emotion/styled';

export const NicknameWrapper = styled.div<{ variant?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 8.9rem;
  padding: 3.2rem 1.6rem 2.9rem;

  border-bottom: 0.6rem solid ${({ theme }) => theme.colors.LG_2};

  cursor: ${({ variant }) => variant === 'login' && 'pointer'};
`;

export const NicknameText = styled.span`
  color: ${({ theme }) => theme.colors.BG};
  ${({ theme }) => theme.fonts.Head1_B_20};
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem 1.6rem 1rem;
`;

export const Line = styled.div`
  width: 100%;
  height: 0.1rem;

  background-color: ${({ theme }) => theme.colors.LG};
`;

export const Tab = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 3.2rem;
  margin: 0.525rem 0;

  cursor: pointer;
`;

export const SubTitle = styled.span`
  padding-bottom: 1em;

  color: ${({ theme }) => theme.colors.WG};
  ${({ theme }) => theme.fonts.Caption2_SB_12};
`;

export const Link = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 3.2rem;
  margin: 0.525rem 0;

  cursor: pointer;
`;

export const Text = styled.span`
  ${({ theme }) => theme.fonts.Title2_M_16};
  color: ${({ theme }) => theme.colors.BG};
`;
