import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-direction: column;
`;

export const LecueNote = styled.article<{
  $bgColor: string;
  $isIconClicked: boolean;
  $imgFile: string;
}>`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  height: calc(100dvh - 33.2rem);

  border-radius: 0.6rem;

  ${({ $isIconClicked, $bgColor, $imgFile }) =>
    $isIconClicked
      ? css`
          width: 100%;
          height: calc(100dvh - 33.2rem);

          background-size: 100% calc(100dvh - 33.2rem);

          background-image: url(${$imgFile});
        `
      : css`
          background-color: ${$bgColor};
        `};
`;

export const Nickname = styled.p<{ $textColor: string }>`
  margin: 2rem 0 1rem 2rem;

  color: ${({ $textColor }) => $textColor};
  ${({ theme }) => theme.fonts.Head1_B_20}
`;

export const Contents = styled.textarea<{ $textColor: string }>`
  width: calc(100% - 3rem);
  height: 100%;
  margin: 0 1.5rem 2rem;

  border: none;
  ${({ theme }) => theme.fonts.Body1_R_16};
  background-color: transparent;
  color: ${({ $textColor }) => $textColor};
  resize: none;

  outline-color: ${({ theme }) => theme.colors.key};

  &::placeholder {
    color: ${({ theme }) => theme.colors.DG};
    ${({ theme }) => theme.fonts.Body2_M_14};
  }
`;

export const BottomContentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: calc(100% - 4rem);
  height: 1.7rem;
  margin: 0 2rem 2rem;
`;

export const Date = styled.p`
  ${({ theme }) => theme.fonts.E_Body2_R_14};
  color: ${({ theme }) => theme.colors.DG50};
`;

export const Counter = styled.p`
  ${({ theme }) => theme.fonts.E_Body2_R_14};
  color: ${({ theme }) => theme.colors.DG};
`;

export const Notice = styled.p`
  color: ${({ theme }) => theme.colors.key};

  ${({ theme }) => theme.fonts.Caption1_R_12};
`;
