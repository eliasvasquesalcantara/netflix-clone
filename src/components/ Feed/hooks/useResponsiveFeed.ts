import { useEffect, useState } from "react";

const useResponsiveFeed = () => {
  const [pixelsScrollClickArrow, setPixelsScrollClickArrow] =
    useState<number>(0);

  const [amountThumbShown, setAmountThumbShow] = useState(5);

  useEffect(() => {
    if (window.innerWidth > 1050) {
      setPixelsScrollClickArrow(212.5);
      setAmountThumbShow(5);
    } else if (window.innerWidth > 800) {
      setPixelsScrollClickArrow(208);
      setAmountThumbShow(4);
    } else if (window.innerWidth > 650) {
      setPixelsScrollClickArrow(200);
      setAmountThumbShow(3);
    } else if (window.innerWidth > 500) {
      setPixelsScrollClickArrow(172);
      setAmountThumbShow(3);
    } else if (window.innerWidth > 350) {
      setPixelsScrollClickArrow(185);
      setAmountThumbShow(2);
    } else {
      setPixelsScrollClickArrow(145);
      setAmountThumbShow(2);
    }   
  }, []);

  return { pixelsScrollClickArrow, amountThumbShown };
};

export default useResponsiveFeed;
