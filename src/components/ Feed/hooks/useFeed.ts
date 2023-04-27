import { useRef, useState } from "react";
import { StaticImageData } from "next/image";

import strangerThings from "../../../../public/assets/stranger-things.jpg";
import agenteNoturno from "../../../../public/assets/agente-noturno.jpg";
import suits from "../../../../public/assets/suits.webp";
import onePiece from "../../../../public/assets/one-piece.webp";
import run from "../../../../public/assets/run.webp";

const imagesSrc: StaticImageData[] = [
  strangerThings,
  agenteNoturno,
  suits,
  onePiece,
  run,
  strangerThings,
  agenteNoturno,
  suits,
  onePiece,
  run,
];

const PIXELS_SCROLL_CLICK_ARROW = 222.5;
const AMOUNT_THUMB_SHOWN = 5;

const useFeed = () => {
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
    seeMoreClickCount === imagesSrc.length - AMOUNT_THUMB_SHOWN;

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
