import React, { forwardRef } from 'react';

import { ImgLe, ImgStar } from '../../../assets';
import { Name, SliderBannerItemWrapper } from './SlideBannerItem.style';

interface SlideBannerItemProps {
  name: string;
}

const SlideBannerItem = forwardRef(function SlideBannerItem(
  { name }: SlideBannerItemProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <SliderBannerItemWrapper ref={ref as React.RefObject<HTMLDivElement>}>
      <ImgLe />
      <Name>{`( ${name} )`}</Name>
      <ImgStar />
    </SliderBannerItemWrapper>
  );
});

export default SlideBannerItem;
