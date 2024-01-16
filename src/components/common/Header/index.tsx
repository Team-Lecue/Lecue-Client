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
  const handleClickShareButton = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Lecue',
          url: window.location.href,
        });
      } else {
        alert('이 브라우저에서는 내장 공유 기능을 지원하지 않습니다.');
      }
    } catch (error) {
      console.error('내장 공유 기능을 실행하는 중 에러가 발생했습니다:', error);
    }
  };

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
