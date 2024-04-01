import styled from '@emotion/styled';

export const LecueBookWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-direction: column;
  position: relative;

  width: 9.8rem;
`;

export const FavoriteButton = styled.button`
  position: absolute;
  left: 0.2rem;
`;

export const BookImage = styled.img`
  width: 9.8rem;
  height: 9.8rem;

  border-radius: 50%;

  object-fit: cover;
`;

export const Title = styled.h1`
  width: 100%;

  color: ${({ theme }) => theme.colors.BG};

  text-align: center;
  word-wrap: normal;
  word-break: break-all;

  ${({ theme }) => theme.fonts.E_Body1_SB_14};
`;
