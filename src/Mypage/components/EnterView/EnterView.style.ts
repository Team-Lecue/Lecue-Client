import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0 1.6rem;
`;

export const ProfileWrapper = styled(Wrapper)`
  padding-top: 3rem;
  padding-bottom: 1rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.LG};
`;

export const ServiceWrapper = styled(Wrapper)`
  padding-top: 2rem;
  padding-bottom: 1rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.LG};
`;

export const OtherWrapper = styled(Wrapper)`
  padding-top: 2rem;
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

  ${({ theme }) => theme.fonts.Caption2_SB_12};
  color: ${({ theme }) => theme.colors.WG};
`;

export const Text = styled.span`
  ${({ theme }) => theme.fonts.Title2_M_16};
  color: ${({ theme }) => theme.colors.BG};
`;

export const Link = styled.a`
  ${({ theme }) => theme.fonts.Title2_M_16};
  color: ${({ theme }) => theme.colors.BG};
`;
