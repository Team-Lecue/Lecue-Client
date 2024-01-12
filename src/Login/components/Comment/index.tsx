import {
  ImgKakao01,
  ImgKakao02,
  ImgKakao03,
  ImgKakaoSpring,
} from '../../../assets';
import * as S from './Comment.style';

function Comment() {
  return (
    <S.CommentWrapper>
      <S.CommentSection>
        <S.Comment>
          <ImgKakao01 />
        </S.Comment>

        <S.Comment>
          <ImgKakao02 />
        </S.Comment>

        <S.Comment>
          <ImgKakao03 />
        </S.Comment>
      </S.CommentSection>

      <S.Line>
        <S.Spring>
          <ImgKakaoSpring />
        </S.Spring>
        <S.Spring>
          <ImgKakaoSpring />
        </S.Spring>
        <S.Spring>
          <ImgKakaoSpring />
        </S.Spring>
      </S.Line>
    </S.CommentWrapper>
  );
}

export default Comment;
