import { StaticImageData } from "next/image";
import { useRef, useState } from "react";

const PIXELS_SCROLL_CLICK_ARROW = 212.5;
const AMOUNT_THUMB_SHOWN = 5;

const useFeed = (amountThumbnails: number) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [seeMoreClickCount, setSeeMoreClickCount] = useState(0);

  const handleLeftArrowClick = () => {
    if (!ref.current) return;

    ref.current.scrollLeft -= PIXELS_SCROLL_CLICK_ARROW;
    setSeeMoreClickCount((curr) => curr - 1);
  };

  const handleRightArrowClick = () => {
    if (!ref.current) return;

    ref.current.scrollLeft += PIXELS_SCROLL_CLICK_ARROW;
    setSeeMoreClickCount((curr) => curr + 1);
  };

  const isScrolling = () => seeMoreClickCount > 0 && !isEndScroll();

  const isEndScroll = () =>
    seeMoreClickCount === amountThumbnails - AMOUNT_THUMB_SHOWN;

  const isStartScroll = () => seeMoreClickCount === 0;

  const isFeedFullWidthOrNot = () => isScrolling() || isEndScroll();

  const showRightArrow = () => isScrolling() || isStartScroll();

  const showLeftArrow = () => isScrolling() || isEndScroll();

  const isLessOpacityThumbIndex = (index: number): boolean => {
    const isHalfThumbStart = index === seeMoreClickCount - 1;
    const isHalfThumbEnd = index === AMOUNT_THUMB_SHOWN + seeMoreClickCount;

    if (isHalfThumbStart || isHalfThumbEnd) return true;
    return false;
  };

  return {
    isScrolling,
    ref,
    handleLeftArrowClick,
    showLeftArrow,
    handleRightArrowClick,
    showRightArrow,
    isLessOpacityThumbIndex,
    isFeedFullWidthOrNot,
  };
};

export default useFeed;
