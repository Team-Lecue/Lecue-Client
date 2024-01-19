import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 9;

  width: 100%;
  height: 100dvh;

  background: ${({ theme }) => theme.colors.Modal};
`;

export const Contents = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 10;

  margin: 17.4rem 4.4rem;

  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ImgWrapper = styled.div`
  margin: 1.1rem;
`;

export const Title = styled.p`
  margin-top: 0.2rem;
  margin-bottom: 1.3rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.Title1_SB_16};
`;

export const SubTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-bottom: 3.7rem;
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.key};
  ${({ theme }) => theme.fonts.Body2_M_14};
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;

  width: calc(100% - 3rem);
  margin: 0 1.5rem 1.4rem;
`;

export const Button = styled.button<{ variant: string }>`
  width: 100%;
  padding: 1.5rem 0;

  border-radius: 0.4rem;
  ${({ theme }) => theme.fonts.Title1_SB_16};
  ${({ variant, theme }) =>
    variant === 'stop'
      ? css`
          background-color: ${theme.colors.LG};
          color: ${theme.colors.DG};
        `
      : css`
          background-color: ${theme.colors.black};
          color: ${theme.colors.white};
        `};
`;
