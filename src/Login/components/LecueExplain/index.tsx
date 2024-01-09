import {
  ImgKakao01,
  ImgKakao02,
  ImgKakao03,
  ImgKakaoLine,
  ImgKakaoLogo,
} from '../../../assets';
import * as S from './LecueExplain.style';
function LecueExplain() {
  return (
    <S.GirdWrapper>
      <S.GridElement />
      <S.GridElement>
        <ImgKakaoLogo />
      </S.GridElement>
      <S.GridElement>
        <S.CommentWrapper>
          <S.Comment>
            <ImgKakao01 />
          </S.Comment>
          <S.Comment>
            <ImgKakao02 />
          </S.Comment>
          <S.Comment>
            <ImgKakao03 />
          </S.Comment>
        </S.CommentWrapper>
        <S.Line>
          <ImgKakaoLine />
        </S.Line>
      </S.GridElement>
    </S.GirdWrapper>
  );
}

export default LecueExplain;
