import { useEffect, useState } from "react";

const useResponsiveFeed = () => {
  const [count, setCount] = useState(0);

  const [pixelsScrollClickArrow, setPixelsScrollClickArrow] =
    useState<number>(0);

  const [amountThumbsShowing, setAmountThumbsShowing] = useState(5);

  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    if (innerWidth > 1100) setPixelsScrollClickArrow(235); //V
    else if (innerWidth > 1000) setPixelsScrollClickArrow(235); //V
    else if (innerWidth > 900) setPixelsScrollClickArrow(215); //V
    else if (innerWidth > 800) setPixelsScrollClickArrow(200); //V
    else if (innerWidth > 700) setPixelsScrollClickArrow(215); //V
    else if (innerWidth > 600) setPixelsScrollClickArrow(190); //V
    else if (innerWidth > 500) setPixelsScrollClickArrow(160); //V
    else if (innerWidth > 400) setPixelsScrollClickArrow(185); //V
    else if (innerWidth > 300) setPixelsScrollClickArrow(145); //V
    else setPixelsScrollClickArrow(105);

    if (innerWidth > 1100) setAmountThumbsShowing(5);
    else if (innerWidth > 800) setAmountThumbsShowing(4);
    else if (innerWidth > 500) setAmountThumbsShowing(3);
    else setAmountThumbsShowing(2);
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
