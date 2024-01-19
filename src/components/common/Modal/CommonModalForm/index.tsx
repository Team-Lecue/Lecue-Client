import { useEffect, useState } from 'react';

import { MODAL_CONTENTS } from '../constants/ModalContents';
import * as S from './CommonModalForm.style';

interface CommonModalFormProps {
  onClose: () => void;
  category: string;
  handleFn: () => void;
}

function CommonModalForm({
  onClose,
  category,
  handleFn,
}: CommonModalFormProps) {
  const [idx, setIdx] = useState(-1);

  const handleClickRightBtn = () => {
    onClose();
    handleFn();
  };

  useEffect(() => {
    switch (category) {
      case 'note_complete':
        return setIdx(0);
      case 'note_escape':
        return setIdx(1);
      case 'book_escape':
        return setIdx(2);
      case 'book_create':
        return setIdx(3);
      case 'book_delete':
        return setIdx(4);
      case 'login':
        return setIdx(5);
      default:
        return;
    }
  }, []);

  return (
    <S.Wrapper>
      {idx !== -1 && (
        <S.Contents>
          <S.ImgWrapper>{MODAL_CONTENTS[idx].img}</S.ImgWrapper>

          <S.Title>{MODAL_CONTENTS[idx].title}</S.Title>
          <S.SubTitleWrapper>
            <S.SubTitle>{MODAL_CONTENTS[idx].subTitle1}</S.SubTitle>
            <S.SubTitle>{MODAL_CONTENTS[idx].subTitle2}</S.SubTitle>
          </S.SubTitleWrapper>

          <S.BtnWrapper>
            {idx !== 5 && (
              <S.Button type="button" variant="stop" onClick={onClose}>
                {MODAL_CONTENTS[idx].leftBtn}
              </S.Button>
            )}

            <S.Button
              type="button"
              variant="continue"
              onClick={handleClickRightBtn}
            >
              {MODAL_CONTENTS[idx].rightBtn}
            </S.Button>
          </S.BtnWrapper>
        </S.Contents>
      )}
    </S.Wrapper>
  );
}

export default CommonModalForm;
