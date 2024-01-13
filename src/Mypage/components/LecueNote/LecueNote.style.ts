import styled from '@emotion/styled';

export const Wrapper = styled.section`
  width: 16.3rem;
  height: 16.3rem;
  padding: 1.5rem 0.95rem 0.6rem;

  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TextWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-direction: column;
`;
export const Name = styled.p`
  ${({ theme }) => theme.fonts.Title2_M_16};
  color: ${({ theme }) => theme.colors.BG};
`;

export const Title = styled.p`
  ${({ theme }) => theme.fonts.Body4_SB_14};
`;

export const Content = styled.p`
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  overflow: hidden;

  width: 14.4rem;

  ${({ theme }) => theme.fonts.Caption1_R_12};

  text-overflow: ellipsis;
`;

export const Date = styled.p`
  width: 100%;
  padding-top: calc(100% - 11rem);

  text-align: right;
`;
