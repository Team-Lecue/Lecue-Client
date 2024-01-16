import { useNavigate } from 'react-router-dom';

import { IcNotice, ImgLogoLecue } from '../../../assets';
import * as S from './NavigateLecueBook.style';

function NavigateLecueBook() {
  const NAVIGATE_CATEGORY = ['레큐북 만들기', '내 기록 보기'];
  const navigate = useNavigate();

  const handleClickNavBtn = (idx: number) => {
    if (localStorage.getItem('token')) {
      idx === 0 ? navigate('create-book') : navigate('/mypage');
    } else {
      alert('로그인이 필요한 페이지입니다!');
      navigate('/login');
    }
  };

  return (
    <S.MainWrapper>
      <S.IconWrapper>
        <ImgLogoLecue />
        <a
          href="https://rileybyeon.notion.site/TEAM-LECUE-b7801fe345544442938d3e54980032e4?pvs=4"
          target="_blank"
          rel="noreferrer"
        >
          <IcNotice />
        </a>
      </S.IconWrapper>

      <S.ButtonWrapper>
        {NAVIGATE_CATEGORY.map((category, idx) => {
          return (
            <S.Button
              type="button"
              key={category}
              variant={idx === 0}
              onClick={() => handleClickNavBtn(idx)}
            >
              {category}
            </S.Button>
          );
        })}
      </S.ButtonWrapper>
    </S.MainWrapper>
  );
}

export default NavigateLecueBook;
