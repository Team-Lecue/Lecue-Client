import { useState } from 'react';
import { DraggableData, DraggableEvent } from 'react-draggable';

import { postedStickerType } from '../type/lecueBookType';

const useStickerState = (savedScrollPosition: number) => {
  const [stickerState, setStickerState] = useState<postedStickerType>({
    postedStickerId: 0,
    stickerImage: '',
    positionX: 0,
    positionY: savedScrollPosition,
  });

  const handleDrag = (_e: DraggableEvent, ui: DraggableData) => {
    const { positionX, positionY } = stickerState;
    setStickerState((prev) => ({
      ...prev,
      positionX: positionX + ui.deltaX,
      positionY: positionY + ui.deltaY,
    }));
  };

  return { stickerState, setStickerState, handleDrag };
};

export default useStickerState;
