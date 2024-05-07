import React from 'react';
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
  isDetailPage?: boolean;
  handleFn?: () => void;
}

interface HeaderButtonProps {
  isDarkMode?: boolean;
  handleFn?: () => void;
}

function Header({ headerTitle, isDetailPage, handleFn }: HeaderProps) {
  return (
    <S.HeaderWrapper>
      <S.HeaderButtonWrapper isLeft={true}>
        {isDetailPage ? <HomeButton /> : <BackButton handleFn={handleFn} />}
      </S.HeaderButtonWrapper>
      <S.HeaderTitle>{headerTitle}</S.HeaderTitle>
      <S.HeaderButtonWrapper isLeft={false}>
        {isDetailPage && <ShareButton />}
      </S.HeaderButtonWrapper>
    </S.HeaderWrapper>
  );
}

export function HomeButton() {
  const navigate = useNavigate();
  const handleClickHomeButton = () => {
    navigate('/', { state: { step: 1 } });
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

export function BackButton({ isDarkMode, handleFn }: HeaderButtonProps) {
  const navigate = useNavigate();
  const handleClickBackButton = () => {
    handleFn ? handleFn() : navigate(-1);
  };

  return (
    <S.HeaderButton onClick={handleClickBackButton}>
      {isDarkMode ? <IcArrowLeftWhite /> : <IcArrowLeftBlack />}
    </S.HeaderButton>
  );
}

export default React.memo(Header);
