import * as S from './Header.style';
import { IcHome, IcSharing } from '../../assets/icon/svgs';

interface HeaderProps {
  headerTitle: string;
}

function Header({ headerTitle }: HeaderProps) {
  const handleClickHomeButton = () => {
    // 홈으로 이동하는 로직 추후 구현 필요
  };

  const handleClickShareButton = () => {
    // 공유(?) 페이지로 이동하는 로직 추후 구현 필요
  };

  return (
    <S.HeaderWrapper>
      <S.HeaderButton onClick={handleClickHomeButton}>
        <IcHome />
      </S.HeaderButton>
      <S.HeaderTitle>{headerTitle}</S.HeaderTitle>
      <S.HeaderButton onClick={handleClickShareButton}>
        <IcSharing />
      </S.HeaderButton>
    </S.HeaderWrapper>
  );
}

export default Header;
