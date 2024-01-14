import styled from '@emotion/styled';

import { ImgEvent } from '../../../assets';

export const SelectBookPageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100dvh;
`;

export const SelectBookPageBodyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 100%;
  height: calc(100vh - 5.4rem);
  padding: 0 1.6rem;
  margin-top: 5.4rem;
`;

export const SelectBookContainer = styled.div<{
  isClickedSelectButton: boolean;
}>`
  width: 100%;
  margin-top: ${({ isClickedSelectButton }) =>
    isClickedSelectButton ? '3.6rem' : '5.4rem'};
`;

export const SectionTitle = styled.p`
  color: ${({ theme }) => theme.colors.BG};
  ${({ theme }) => theme.fonts.Head2_SB_18};
`;

export const SectionOrangeTitle = styled.p`
  color: ${({ theme }) => theme.colors.key};
  ${({ theme }) => theme.fonts.Head2_SB_18};
`;

export const BookTypeContainerWrapper = styled.div<{
  isClickedSelectButton: boolean;
}>`
  display: flex;
  justify-content: center;

  width: 100%;
  margin-top: ${({ isClickedSelectButton }) =>
    isClickedSelectButton ? '3.3rem' : '4rem'};
`;

export const BookTypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  width: 34.3rem;
`;

export const StyledImgEvent = styled(ImgEvent)`
  position: absolute;
  top: -3.5rem;
  right: 1.1rem;
  z-index: 5;

  transition: width 0.5s ease;
`;
