import { Action, State } from '../type/reducerType';

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    // presignedUrl을 활용하기 위한 url과 filename을 업데이트하는 동작
    case 'SET_PRESIGNED_URL':
      return {
        ...state,
        presignedUrl: action.presignedUrl,
        filename: action.filename,
      };

    // 노트에 텍스트 작성할 경우 동작
    case 'SET_CONTENTS':
      return { ...state, contents: action.contents };

    // 텍스트/ 배경 색 카테고리를 선택한 경우 동작
    case 'CLICKED_CATEGORY':
      return { ...state, category: action.category };

    // 텍스트 색을 선택한 경우 동작
    case 'CLICKED_TEXT_COLOR':
      return { ...state, textColor: action.color };

    // 배경 색을 선택한 경우 동작
    case 'CLICKED_BG_COLOR':
      return { ...state, background: action.color };

    // 이미지 파일을 선택한 경우 동작
    case 'SELECTED_FILE':
      return { ...state, file: action.file };

    // 이미지 선택 아이콘을 클릭한 경우 동작
    case 'CLICKED_IMG_ICON':
      return { ...state, isIconClicked: true };

    // 이미지 선택 아이콘을 클릭하지 않은 경우 동작
    case 'NOT_CLICKED_IMG_ICON':
      return { ...state, isIconClicked: false };

    // 이미지 파일을 string 주소 값으로 반환
    case 'IMG_TO_STR':
      return { ...state, imgToStr: action.imgFile };

    // 이미지 파일을 binary 값으로 반환
    case 'IMG_TO_BINARY':
      return { ...state, imgToBinary: action.imgFile };

    case 'RESET_PREV_IMG':
      return { ...state, imgToStr: '' };

    default:
      throw new Error('Unhandled action');
  }
};
