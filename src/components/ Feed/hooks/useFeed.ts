import { useRef, useState } from "react";
import useResponsiveFeed from "./useResponsiveFeed";

const useFeed = (totalThumbnails: number) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { pixelsScrollClickArrow, amountThumbsShowing } = useResponsiveFeed();

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

  const isScrolling = () => !isStartScroll() && !isEndScroll();

  const isEndScroll = () =>
    seeMoreClickCount === totalThumbnails - amountThumbsShowing;

  const isStartScroll = () => seeMoreClickCount === 0;

  const isFeedFullWidth = () => !isStartScroll()

  const showSeeMoreRight = () => isScrolling() || isStartScroll();

  const showSeeMoreLeft = () => isScrolling() || isEndScroll();

  const isLessOpacityThumbIndex = (index: number): boolean => {
    const isHalfThumbStart = index === seeMoreClickCount - 1;
    const isHalfThumbEnd = index === amountThumbsShowing + seeMoreClickCount;

    if (isHalfThumbStart || isHalfThumbEnd) return true;
    return false;
  };

  return {
    isScrolling,
    ref,
    handleLeftArrowClick,
    showSeeMoreLeft,
    handleRightArrowClick,
    showSeeMoreRight,
    isLessOpacityThumbIndex,
    isFeedFullWidth,
  };
};

export default useFeed;
