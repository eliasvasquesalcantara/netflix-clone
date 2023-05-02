import { useEffect, useState } from "react";

const useResponsiveFeed = () => {
  const [count, setCount] = useState(0);

  const [pixelsScrollClickArrow, setPixelsScrollClickArrow] =
    useState<number>(0);

  const [amountThumbsShowing, setAmountThumbsShowing] = useState(5);

  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    if (innerWidth > 1050) {
      setPixelsScrollClickArrow(212.5);
      setAmountThumbsShowing(5);
    } else if (innerWidth > 800) {
      setPixelsScrollClickArrow(208);
      setAmountThumbsShowing(4);
    } else if (innerWidth > 650) {
      setPixelsScrollClickArrow(200);
      setAmountThumbsShowing(3);
    } else if (innerWidth > 500) {
      setPixelsScrollClickArrow(172);
      setAmountThumbsShowing(3);
    } else if (innerWidth > 350) {
      setPixelsScrollClickArrow(185);
      setAmountThumbsShowing(2);
    } else {
      setPixelsScrollClickArrow(145);
      setAmountThumbsShowing(2);
    }
  }, [innerWidth]);

  useEffect(() => {
    if (window.innerWidth !== innerWidth) setInnerWidth(window.innerWidth);

    const timeout = setTimeout(() => {
      setCount((curr) => curr + 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [count]);

  return { pixelsScrollClickArrow, amountThumbsShowing };
};

export default useResponsiveFeed;
