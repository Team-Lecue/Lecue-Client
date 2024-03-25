import styled from '@emotion/styled';

export const MyFavoriteBookWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-direction: column;

  width: 9.8rem;
  height: 14.4rem;
`;

export const FavoriteButton = styled.button`
  display: absolute;
`;

export const BookImage = styled.div`
  position: relative;

  width: 9.8rem;
  height: 9.8rem;

  border-radius: 5rem;
  background-color: black;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.BG}
    ${({ theme }) => theme.fonts.E_Body1_SB_14};
`;
