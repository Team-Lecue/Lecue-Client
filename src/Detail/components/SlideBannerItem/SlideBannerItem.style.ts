import styled from '@emotion/styled';

export const SliderBannerItemWrapper = styled.div`
  display: flex;
  flex-shrink: 0;

  width: auto;
  margin-right: 0.6rem;
`;

export const Name = styled.p`
  margin: 0.3rem 0.6rem 0;

  ${({ theme }) => theme.fonts.Orange};
`;
