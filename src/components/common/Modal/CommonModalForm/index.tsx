import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MODAL_CONTETNS } from '../constants/ModalContents';
import * as S from './CommonModalForm.style';

interface CommonModalFormProps {
  onClose: () => void;
  category: string;
  uuid?: string;
}

function CommonModalForm({ onClose, category, uuid }: CommonModalFormProps) {
  const navigate = useNavigate();
  const [idx, setIdx] = useState(0);

  const handleClickRightBtn = () => {
    onClose();
    switch (category) {
      case 'note_complete':
        navigate(`/lecue-book/${uuid}`);
        break;
      case 'note_escape':
        break;
      case 'book_escape':
        break;
      case 'book_create':
        break;
      case 'book_delete':
        break;
      case 'login':
        navigate('/login');
        break;
      default:
        break;
    }
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
      <S.Contents>
        <S.ImgWrapper>{MODAL_CONTETNS[idx].img}</S.ImgWrapper>

        <S.Title>{MODAL_CONTETNS[idx].title}</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>{MODAL_CONTETNS[idx].subTitle1}</S.SubTitle>
          <S.SubTitle>{MODAL_CONTETNS[idx].subTitle2}</S.SubTitle>
        </S.SubTitleWrapper>

        <S.BtnWrapper>
          {idx !== 5 && (
            <S.Button type="button" variant="stop" onClick={onClose}>
              {MODAL_CONTETNS[idx].leftBtn}
            </S.Button>
          )}

          <S.Button
            type="button"
            variant="continue"
            onClick={handleClickRightBtn}
          >
            {MODAL_CONTETNS[idx].rightBtn}
          </S.Button>
        </S.BtnWrapper>
      </S.Contents>
    </S.Wrapper>
  );
}

export default CommonModalForm;
