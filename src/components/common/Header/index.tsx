import { ReactNode } from 'react';
import * as S from './Header.style';
import {
  IcArrowLeftBlack,
  IcArrowLeftWhite,
  IcHome,
  IcSharing,
} from '../../../assets';

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
  const handleClickHomeButton = () => {
    // 홈으로 이동하는 로직 추후 구현 필요
  };

  return (
    <S.HeaderButton onClick={handleClickHomeButton}>
      <IcHome />
    </S.HeaderButton>
  );
}

export function ShareButton() {
  const handleClickShareButton = () => {
    // 공유(?) 페이지로 이동하는 로직 추후 구현 필요
  };

  return (
    <S.HeaderButton onClick={handleClickShareButton}>
      <IcSharing />
    </S.HeaderButton>
  );
}

export function BackButton({ isDarkMode }: HeaderButtonProps) {
  const handleClickBackButton = () => {
    // 뒤로 이동하는 로직 추후 구현 필요
  };

  return (
    <S.HeaderButton onClick={handleClickBackButton}>
      {isDarkMode ? <IcArrowLeftWhite /> : <IcArrowLeftBlack />}
    </S.HeaderButton>
  );
}

export default Header;
