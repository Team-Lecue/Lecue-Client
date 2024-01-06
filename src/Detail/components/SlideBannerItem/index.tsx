import React, { forwardRef } from 'react';

import { ImgLe, ImgStar } from '../../../assets';
import * as S from './SlideBannerItem.style';

interface SlideBannerItemProps {
  name: string;
}

const SlideBannerItem = forwardRef(function SlideBannerItem(
  { name }: SlideBannerItemProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <S.SliderBannerItemWrapper ref={ref as React.RefObject<HTMLDivElement>}>
      <ImgLe />
      <S.Name>{`( ${name} )`}</S.Name>
      <ImgStar />
    </S.SliderBannerItemWrapper>
  );
});

export default SlideBannerItem;
