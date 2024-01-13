import { ImgModalEx } from '../../../../assets';
import * as S from './CommonModalForm.style';

interface CommonModalFormProps {
  onClose: () => void;
  title: string;
  subTitle1: string;
  subTitle2: string;
  leftBtn: string;
  rightBtn: string;
}

function CommonModalForm({
  onClose,
  title,
  subTitle1,
  subTitle2,
  leftBtn,
  rightBtn,
}: CommonModalFormProps) {
  return (
    <S.Wrapper>
      <S.Contents>
        <S.ImgWrapper>
          <ImgModalEx />
        </S.ImgWrapper>

        <S.Title>{title}</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>{subTitle1}</S.SubTitle>
          <S.SubTitle>{subTitle2}</S.SubTitle>
        </S.SubTitleWrapper>

        <S.BtnWrapper>
          <S.Button type="button" variant="stop" onClick={onClose}>
            {leftBtn}
          </S.Button>
          <S.Button type="button" variant="continue">
            {rightBtn}
          </S.Button>
        </S.BtnWrapper>
      </S.Contents>
    </S.Wrapper>
  );
}

export default CommonModalForm;
