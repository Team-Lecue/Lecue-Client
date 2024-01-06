import { useEffect, useRef, useState } from 'react';

import SlideBannerItem from '../SlideBannerItem';
import {
  AnimationBox,
  SlideBannerItemList,
  SliderBannerWrapper,
} from './SlideBanner.style';

interface SlideBannerProps {
  name: string;
}

function SlideBanner({ name }: SlideBannerProps) {
  const itemBoxRef = useRef<HTMLDivElement | null>(null);
  const [itemListWidth, setItemListWidth] = useState(0);
  const [animationListWidth, setAnimationListWidth] = useState(0);
  const [animationDuration, setAnimationDuration] = useState(10);

  const renderSlideBannerItems = () => {
    return Array.from({ length: 10 }, (_, index) => (
      <SlideBannerItem key={index} ref={itemBoxRef} name={name} />
    ));
  };

  useEffect(() => {
    if (itemBoxRef.current) {
      const itemBoxWidth = itemBoxRef.current.offsetWidth;

      const itemListWidth = itemBoxWidth + 6;

      setItemListWidth(itemListWidth);
      setAnimationListWidth(itemListWidth * 2);

      const nameLength = name.length;
      const newAnimationDuration = Math.max(1, nameLength * 7);
      setAnimationDuration(newAnimationDuration);
    }
  }, [name]);

  return (
    <SliderBannerWrapper>
      <AnimationBox
        width={animationListWidth}
        animationDuration={animationDuration}
      >
        <SlideBannerItemList width={itemListWidth}>
          {renderSlideBannerItems()}
        </SlideBannerItemList>
        <SlideBannerItemList width={itemListWidth}>
          {renderSlideBannerItems()}
        </SlideBannerItemList>
      </AnimationBox>
    </SliderBannerWrapper>
  );
}

export default SlideBanner;
