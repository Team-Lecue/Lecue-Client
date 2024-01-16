import { useNavigate } from 'react-router-dom';

import {
  IcArrowLeftBlack,
  IcArrowLeftWhite,
  IcHome,
  IcSharing,
} from '../../../assets';
import * as S from './Header.style';

interface HeaderProps {
  headerTitle: string;
  isDarkMode?: boolean;
  isDetailPage?: boolean;
}

interface HeaderButtonProps {
  isDarkMode?: boolean;
}

function Header({ headerTitle, isDarkMode, isDetailPage }: HeaderProps) {
  return (
    <S.HeaderWrapper isDarkMode={isDarkMode}>
      <S.HeaderButtonWrapper isLeft={true}>
        {isDetailPage ? <HomeButton /> : <BackButton isDarkMode={isDarkMode} />}
      </S.HeaderButtonWrapper>
      <S.HeaderTitle isDarkMode={isDarkMode}>{headerTitle}</S.HeaderTitle>
      <S.HeaderButtonWrapper isLeft={false}>
        {isDetailPage ? <ShareButton /> : <></>}
      </S.HeaderButtonWrapper>
    </S.HeaderWrapper>
  );
}

export function HomeButton() {
  const navigate = useNavigate();
  const handleClickHomeButton = () => {
    navigate('/');
  };

  return (
    <S.HeaderButton onClick={handleClickHomeButton}>
      <IcHome />
    </S.HeaderButton>
  );
}

export function ShareButton() {
  const handleClickShareButton = () => {};

  return (
    <S.HeaderButton onClick={handleClickShareButton}>
      <IcSharing />
    </S.HeaderButton>
  );
}

export function BackButton({ isDarkMode }: HeaderButtonProps) {
  const navigate = useNavigate();
  const handleClickBackButton = () => {
    navigate(-1);
  };

  return (
    <S.HeaderButton onClick={handleClickBackButton}>
      {isDarkMode ? <IcArrowLeftWhite /> : <IcArrowLeftBlack />}
    </S.HeaderButton>
  );
}

export default Header;
