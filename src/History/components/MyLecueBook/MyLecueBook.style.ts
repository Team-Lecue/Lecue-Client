import styled from '@emotion/styled';

export const Wrapper = styled.li`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
  position: relative;

  width: 100%;
  height: 11.4rem;
  padding: 1.3rem 1.8rem 1.1rem 2.5rem;

  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const BookWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  width: 100%;
  margin-bottom: 1.2rem;
`;

export const Name = styled.p`
  ${({ theme }) => theme.fonts.Head2_SB_18};
  color: ${({ theme }) => theme.colors.BG};
`;

export const Favorite = styled.button`
  width: 2.2rem;
  height: 2.2rem;
`;

export const TrashBtn = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.8rem;

  width: 3.2rem;
  height: 3.2rem;
`;

export const Title = styled.p`
  ${({ theme }) => theme.fonts.Title1_SB_16};
  color: ${({ theme }) => theme.colors.BG};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  width: 100%;
`;

export const Date = styled.p`
  padding-bottom: 0.4rem;

  ${({ theme }) => theme.fonts.E_Caption_R_12};
  color: ${({ theme }) => theme.colors.DG50};
`;

export const Count = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 3.1rem;
  padding: 0.6516rem 1.4661rem;

  border-radius: 5.7rem;
  ${({ theme }) => theme.fonts.E_Caption_R_12};
  background-color: ${({ theme }) => theme.colors.BG};
  color: ${({ theme }) => theme.colors.white};
`;
