import { useRef, useState } from "react";
import useResponsiveFeed from "./useResponsiveFeed";

const useFeed = (amountThumbnails: number) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { pixelsScrollClickArrow, amountThumbShown} = useResponsiveFeed()

  const [seeMoreClickCount, setSeeMoreClickCount] = useState(0);

  const handleLeftArrowClick = () => {
    if (!ref.current) return;

    ref.current.scrollLeft -= pixelsScrollClickArrow;
    setSeeMoreClickCount((curr) => curr - 1);
  };

  const handleRightArrowClick = () => {
    if (!ref.current) return;

    ref.current.scrollLeft += pixelsScrollClickArrow;
    setSeeMoreClickCount((curr) => curr + 1);
  };

  const isScrolling = () => seeMoreClickCount > 0 && !isEndScroll();

  const isEndScroll = () =>
    seeMoreClickCount === amountThumbnails - amountThumbShown;

  const isStartScroll = () => seeMoreClickCount === 0;

  const isFeedFullWidthOrNot = () => isScrolling() || isEndScroll();

  const showRightArrow = () => isScrolling() || isStartScroll();

  const showLeftArrow = () => isScrolling() || isEndScroll();

  const isLessOpacityThumbIndex = (index: number): boolean => {
    const isHalfThumbStart = index === seeMoreClickCount - 1;
    const isHalfThumbEnd = index === amountThumbShown + seeMoreClickCount;

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
