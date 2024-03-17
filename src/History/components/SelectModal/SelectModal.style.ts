import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

export const SelectModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  top: 0;
  z-index: 9;

  width: 100%;
  height: 100dvh;

  background: ${({ theme }) => theme.colors.Modal};
`;

export const SelectModalContainer = styled.div<{
  modalOn: boolean;
  animationDirection: string;
}>`
  position: relative;
  z-index: 10;

  width: 100%;
  height: 18rem;

  border-radius: 1rem 1rem 0 0;
  background: ${({ theme }) => theme.colors.white};

  animation: ${({ animationDirection }) =>
      animationDirection === 'slideUp' ? slideUp : slideDown}
    0.1s linear forwards;
`;

export const OptionList = styled.li`
  width: 100%;

  & > :not(:last-child) {
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.background};
  }
`;

export const OptionListItem = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 1.2rem 1.6rem;
`;

export const OptionListItemText = styled.p`
  padding-top: 0.3rem;

  ${({ theme }) => theme.fonts.Title2_M_16};
`;

export const ClosebarContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 3rem;
  padding-top: 1.2rem;
`;
