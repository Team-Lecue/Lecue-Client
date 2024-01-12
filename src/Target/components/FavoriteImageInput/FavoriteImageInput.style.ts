import styled from '@emotion/styled';

export const FavoriteImageInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  width: 100%;
  margin-top: 1.1rem;
`;

export const ImageUploadLabel = styled.label`
  position: absolute;
  bottom: 18%;
  left: 28.5%;

  width: 15rem;
  height: 15rem;
`;

export const ImageUploadInput = styled.input`
  display: none;
`;

export const UploadedImage = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 20rem;

  object-fit: cover;
`;
