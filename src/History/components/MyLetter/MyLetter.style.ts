import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MyLetterWrapper = styled.article<{
  noteTextColor: string;
  noteBackground: string;
}>`
  width: 100%;
  height: 16.3rem;
  padding: 1.3rem 1.2rem;

  border-radius: 0.4rem;
  ${({ noteBackground }) =>
    noteBackground.substring(0, 1) === '#'
      ? css`
          background-color: ${noteBackground};
        `
      : css`
          background: url(${noteBackground});
        `};
  background-size: 100% 16.3rem;
  color: ${({ noteTextColor }) => noteTextColor};
`;

export const MyLetterFavorite = styled.h1`
  line-height: 2.1rem;

  ${({ theme }) => theme.fonts.Title1_SB_16};
`;

export const MyLetterTitle = styled.h2`
  overflow: hidden;

  margin-top: 0.4rem;

  line-height: 2.1rem;

  white-space: nowrap;
  text-overflow: ellipsis;

  ${({ theme }) => theme.fonts.Body4_SB_14};
`;

export const MyLetterContent = styled.p`
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  overflow: hidden;
  text-overflow: ellipsis;

  width: 100%;
  height: 6rem;
  margin-top: 0.7rem;

  ${({ theme }) => theme.fonts.Body3_R_14};
`;

export const MyLetterDate = styled.p`
  width: 100%;
  margin-top: 1.5rem;

  color: ${({ theme }) => theme.colors.DG};

  text-align: right;

  ${({ theme }) => theme.fonts.E_Caption_R_12};
`;
